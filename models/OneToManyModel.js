import { Course }  from './Course.js';
import { Coordinator  }  from './Coordinator.js';

// Set the relationships
Course.belongsTo(Coordinator);

Coordinator.hasMany(Course);

export { Course, Coordinator  };