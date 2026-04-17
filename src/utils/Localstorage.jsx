const employees = [
  {
    "id": 1,
    "firstName": "Ali",
    "email": "e@e.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Update website",
        "description": "Revamp the homepage design",
        "date": "2026-01-12",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Client meeting",
        "description": "Discuss project requirements",
        "date": "2026-02-10",
        "category": "Meeting"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Fix bugs",
        "description": "Resolve bugs reported in issue tracker",
        "date": "2026-03-14",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Write unit tests",
        "description": "Add unit tests for the auth module",
        "date": "2026-04-01",
        "category": "Development"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Ahmed",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Database optimization",
        "description": "Optimize queries for better performance",
        "date": "2026-04-11",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Design new feature",
        "description": "Create mockups for the new feature",
        "date": "2026-05-09",
        "category": "Design"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Bilal",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Prepare presentation",
        "description": "Prepare slides for upcoming client presentation",
        "date": "2026-06-13",
        "category": "Presentation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Code review",
        "description": "Review the codebase for optimization",
        "date": "2026-07-12",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Testing",
        "description": "Test the latest build for bugs",
        "date": "2026-08-08",
        "category": "QA"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "API integration",
        "description": "Integrate third-party payment API",
        "date": "2026-08-20",
        "category": "Development"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Usman",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Write documentation",
        "description": "Update the project documentation",
        "date": "2026-09-13",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Set up CI/CD",
        "description": "Implement continuous integration pipeline",
        "date": "2026-10-11",
        "category": "DevOps"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Security audit",
        "description": "Perform a security audit of the application",
        "date": "2026-10-25",
        "category": "Security"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Hassan",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "UI redesign",
        "description": "Redesign the user interface for better UX",
        "date": "2026-11-14",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Deploy new build",
        "description": "Deploy the latest build to production",
        "date": "2026-12-09",
        "category": "DevOps"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Client feedback",
        "description": "Gather feedback from clients after product launch",
        "date": "2026-12-22",
        "category": "Support"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Performance testing",
        "description": "Run load tests on the production server",
        "date": "2026-12-30",
        "category": "QA"
      }
    ]
  }
]

const admin = [{
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}]

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  return { employees, admin }
}