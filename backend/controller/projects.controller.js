const ProjectModel = require("../models/project.model");

const projectCreate = async(req, res) => {
  const { category, department, division,endDate, location, priority, reason, startDate, status, type, projectName} = req.body;

  try{
    const project = await ProjectModel.create({ category, department, division, endDate, startDate, location, priority, reason, status, type, projectName });

    res.json({ message: 'New project added successfully', Success: true });

  }catch(err){
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

const projectUpdate = async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;

  try {
    const updatedProject = await ProjectModel.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (updatedProject) {
      res.json({
        message: `Project successfully ${status}`,
        success: true,
      });
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


const allProject = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const sort = req.query.sort || 'createdAt';
    const searchTerm = req.query.searchTerm || '';
    const query = {};

    if (searchTerm) {
      query.$or = [
        { projectTitle: { $regex: searchTerm, $options: 'i' } },
        { category: { $regex: searchTerm, $options: 'i' } },
        { division: { $regex: searchTerm, $options: 'i' } },
        { location: { $regex: searchTerm, $options: 'i' } },
        { department: { $regex: searchTerm, $options: 'i' } },
        { priority: { $regex: searchTerm, $options: 'i' } },
        { reason: { $regex: searchTerm, $options: 'i' } },
        { type: { $regex: searchTerm, $options: 'i' } },
      ];
    }

    const totalCount = await ProjectModel.countDocuments(query);
    const totalPages = Math.ceil(totalCount / limit);

    const projects = await ProjectModel.find(query)
      .sort({ [sort]: 1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      projects,
      totalPages,
      totalCount,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


const getCount = async (req, res) => {
  try {
    const counters = await ProjectModel.aggregate([
      {
        $group: {
          _id: null,
          totalProjects: { $sum: 1 },
          closedProjects: {
            $sum: {
              $cond: [{ $eq: ['$status', 'Closed'] }, 1, 0]
            }
          },
          runningProjects: {
            $sum: {
              $cond: [{ $eq: ['$status', 'Running'] }, 1, 0]
            }
          },
          runningExpiredProjects: {
            $sum: {
              $cond: [
                {
                  $and: [
                    { $eq: ['$status', 'Running'] },
                    { $lt: ['$endDate', new Date()] }
                  ]
                },
                1,
                0
              ]
            }
          },
          cancelledProjects: {
            $sum: {
              $cond: [{ $eq: ['$status', 'Cancelled'] }, 1, 0]
            }
          }
        }
      }
    ]);

    if (counters.length > 0) {
      res.json(counters[0]);
    } else {
      res.json({
        totalProjects: 0,
        closedProjects: 0,
        runningProjects: 0,
        runningExpiredProjects: 0,
        cancelledProjects: 0
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


module.exports = {projectCreate, allProject, getCount, projectUpdate};