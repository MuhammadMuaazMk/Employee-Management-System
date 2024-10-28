

const employees = [
  {
    "id": 1,
    "firstName": "Ahmed",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Project Report Completion",
        "taskDescription": "Complete project report",
        "taskDate": "2024-10-20",
        "category": "Work",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Code Review Session",
        "taskDescription": "Code review session",
        "taskDate": "2024-10-24",
        "category": "Meeting",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      
      {
        "taskTitle": "Presentation Slide Preparation",
        "taskDescription": "Prepare presentation slides",
        "taskDate": "2024-10-21",
        "category": "Work",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Client Meeting",
        "taskDescription": "Client meeting",
        "taskDate": "2024-10-22",
        "category": "Meeting",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Bug Fixing",
        "taskDescription": "Bug Fixing",
        "taskDate": "2024-10-22",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 2,
    "firstName": "Amina",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Bug Fixing",
        "taskDescription": "Fix software bugs",
        "taskDate": "2024-10-19",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Unit Test Writing",
        "taskDescription": "Write unit tests",
        "taskDate": "2024-10-23",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Code Review Session",
        "taskDescription": "Code review session",
        "taskDate": "2024-10-24",
        "category": "Meeting",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Presentation Slide Preparation",
        "taskDescription": "Prepare presentation slides",
        "taskDate": "2024-10-21",
        "category": "Work",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCounts": {
      "active": 4,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstName": "Yusuf",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Documentation Update",
        "taskDescription": "Update documentation",
        "taskDate": "2024-10-18",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Team Meeting Attendance",
        "taskDescription": "Attend team meeting",
        "taskDate": "2024-10-20",
        "category": "Meeting",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Research Project",
        "taskDescription": "Research project",
        "taskDate": "2024-10-25",
        "category": "Research",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 2,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstName": "Fatima",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "UI Design for New Feature",
        "taskDescription": "Design UI for new feature",
        "taskDate": "2024-10-20",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Prototype Feedback",
        "taskDescription": "Prototype feedback session",
        "taskDate": "2024-10-21",
        "category": "Feedback",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Style Guide Update",
        "taskDescription": "Update style guide",
        "taskDate": "2024-10-24",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "Omar",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Database Query Optimization",
        "taskDescription": "Optimize database queries",
        "taskDate": "2024-10-22",
        "category": "Database",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Server Data Backup",
        "taskDescription": "Backup server data",
        "taskDate": "2024-10-23",
        "category": "Maintenance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Security Audit",
        "taskDescription": "Security audit",
        "taskDate": "2024-10-26",
        "category": "Security",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 3,
      "newTask": 3,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 6,
    "firstName": "Hassan",
    "email": "employee6@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "API Development",
        "taskDescription": "Develop API for new module",
        "taskDate": "2024-10-18",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Code Refactoring",
        "taskDescription": "Refactor old code",
        "taskDate": "2024-10-22",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 7,
    "firstName": "Khadija",
    "email": "employee7@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "User Research",
        "taskDescription": "Conduct user research for new feature",
        "taskDate": "2024-10-24",
        "category": "Research",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Product Testing",
        "taskDescription": "Test new product update",
        "taskDate": "2024-10-20",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 8,
    "firstName": "Bilal",
    "email": "employee8@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Market Analysis",
        "taskDescription": "Conduct market analysis",
        "taskDate": "2024-10-18",
        "category": "Research",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Competitor Review",
        "taskDescription": "Review competitor's product",
        "taskDate": "2024-10-23",
        "category": "Analysis",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 9,
    "firstName": "Zainab",
    "email": "employee9@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Feature Documentation",
        "taskDescription": "Write documentation for new feature",
        "taskDate": "2024-10-19",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Stakeholder Presentation",
        "taskDescription": "Present updates to stakeholders",
        "taskDate": "2024-10-25",
        "category": "Presentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 10,
    "firstName": "Ismail",
    "email": "employee10@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Internal Training",
        "taskDescription": "Organize training session",
        "taskDate": "2024-10-21",
        "category": "Training",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Workshop Attendance",
        "taskDescription": "Attend workshop on leadership",
        "taskDate": "2024-10-23",
        "category": "Learning",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 0,
      "failed": 0
    }
  }
];






const  admin= [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }]

export const  setLocalStoarge = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin' ,JSON.stringify(admin))
    
}
export const  getLocalStoarge = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return{employees,admin}
    
    

}