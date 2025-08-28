const employees = [ 
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare report",
        description: "Complete the financial report for Q1",
        date: "2025-08-20",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Team meeting",
        description: "Attend the weekly project sync-up",
        date: "2025-08-21",
        category: "Meetings",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Budget analysis",
        description: "Analyze department budget usage",
        date: "2025-08-25",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      }
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 2,
    firstName: "Ishaan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Design homepage",
        description: "Create a new homepage design in Figma",
        date: "2025-08-20",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Update documentation",
        description: "Revise API documentation for new endpoints",
        date: "2025-08-23",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Fix UI bugs",
        description: "Resolve navbar and footer alignment issues",
        date: "2025-08-26",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "UX feedback",
        description: "Collect design feedback from users",
        date: "2025-08-27",
        category: "Research",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      }
    ],
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 3,
    firstName: "Vihaan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Client call",
        description: "Discuss requirements with client",
        date: "2025-08-19",
        category: "Communication",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Prepare slides",
        description: "Make presentation slides for product demo",
        date: "2025-08-25",
        category: "Presentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Write summary",
        description: "Document minutes of meeting with client",
        date: "2025-08-26",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 4,
    firstName: "Kabir",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Database backup",
        description: "Perform weekly database backup",
        date: "2025-08-18",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Code review",
        description: "Review pull requests from frontend team",
        date: "2025-08-21",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Server monitoring",
        description: "Check logs for unusual activity",
        date: "2025-08-22",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "API testing",
        description: "Test new authentication endpoints",
        date: "2025-08-24",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      }
    ],
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 2,
      failed: 0
    }
  },
  {
    id: 5,
    firstName: "Rohan",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Plan sprint",
        description: "Prepare backlog for upcoming sprint",
        date: "2025-08-22",
        category: "Planning",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Test payment flow",
        description: "Check UPI and card payments on staging",
        date: "2025-08-24",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Security audit",
        description: "Run vulnerability scan on web app",
        date: "2025-08-26",
        category: "Security",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Release notes",
        description: "Write release notes for new version",
        date: "2025-08-27",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Bug triage",
        description: "Organize bugs reported in the last sprint",
        date: "2025-08-28",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: true,
      }
    ],
    taskCount: {
      active: 3,
      newTask: 2,
      completed: 2,
      failed: 1
    }
  }
];

const admin = [
  {
    id: 1,
    firstName: "Arjun",
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify (employees))
     localStorage.setItem('admin',JSON.stringify (admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

   return {employees,admin}

    
}