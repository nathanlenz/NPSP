const group1  = {
    id: 1,
    title: 'Explore the Nonprofit Success Pack (NPSP)',
    desc: 'Get comfortable with these concepts and key features so you can customize the, to meet the needs of your organization.',
    steps: [
        { 
            id: 1,
            time: '1 Minute Video',
            title: 'Setup a Contact and Household Account',
            desc: 'People are the most important resource for a nonprofit, so understanding the Contact Object is especially important. Learn How to add relevant constituent data (e.g a name, address, or employer) into your Salesforce instance',
            link: {
                label: 'Learn more about Contact and Accounts in Trailhead'
            },
            buttonLight: {
                label: 'Explore Contacts'
            },
            buttonDark: {
                label: 'Create Households'
            }
        },
        { 
            id: 2,
            time: '1 Minute Video',
            title: 'Stay on Trak with Activites',
            desc: '"Activites" are tasks, events, or ant other interaction tracked in the Activity Timeline. Uderstanding these will allow you to keep track of every interaction with constituens. Learn how to leverage activities to log constituent interactions and assign task',
            link: {
                label: 'Learn more about Activities in Trailhead'
            },
            buttonDark: {
                label: 'Create Activities'
            }
        },
        { 
            id: 3,
            time: '1 Minute Video',
            title: 'Create a Donation',
            desc: 'Keep track of donations, grants, or any other type of revenue so you can identify giving patterns and understand what drives giving at the constituent level. Start by learning how to enter donations into NPSP.',
            link: {
                label: 'Learn more about Donations in Trailhead'
            },
            buttonDark: {
                label: 'Create Donations'
            }
        },
        { 
            id: 4,
            time: '1 Minute Video',
            title: 'Visualize Your Fundraising Process',
            desc: 'Learn how to leverage built-in tools like Path and Kanban to effectively manage your fundraising and donation process. track of donations, grants, or any other type of revenue so you can identify giving patterns and understand what drives giving at the constituent level. Start by learning how to enter donations into NPSP.',
            link: {
                label: 'Learn more about Fundraising in Trailhead'
            },
            buttonDark: {
                label: 'Create Create List Views'
            }
        },
        { 
            id: 5,
            time: '1 Minute Video',
            title: 'Running Report on Constituent Data',
            desc: 'Learn how to build reports and dashboards to bring your data to life and help you tell the story of your organization’s impact.',
            link: {
                label: 'Learn more about Reports in Trailhead'
            },
            buttonLight: {
                label: 'Explore Reports'
            },
            buttonDark: {
                label: 'Report on Data'
            }
        },
        { 
            id: 6,
            time: '1 Minute Video',
            title: 'Learn about other Nonprofit Cloud Features',
            desc: 'This brief overview is meant to dip your toes into what’s possible with NPSP, but you can dive deeper and discover the many other features available to your organization with these resources.',
            link: {
                label: 'Learn more about NPSP Features Trailhead'
            },
            buttonDark: {
                label: 'Feature Configuration Overview'
            }
        },
    ]
}

const group2  =  {
    id: 2,
    title: 'Make it Your Own',
    desc: 'Customize Salesforce with information that\'s unique to your organization to make it your own.',
    steps: [
        { 
            id: 7,
            title: 'Prepare for Success with Nonprofit Cloud a Contact and Household Account',
            desc: 'Set specific goals and learn the best practices for implementing Nonprofit Cloud.',
            buttonDark: {
                label: 'Create Households'
            }
        },
        { 
            id: 8,
            title: 'NPSP Planning Guide',
            desc: 'Take the time to carefully plan your implementation and ensure your instance meets the needs of your nonprofit. Then, once you’ve put all the pieces in place, you’ll be sure you’re ready to launch.',
            link: {
                label: 'Learn more about Implementation in Trailhead'
            },
            buttonDark: {
                label: 'Download PDF'
            }
        },
        { 
            id: 9,
            time: '1 Minute Video',
            title: 'Review Company Information',
            desc: 'Set important pieces of your organization’s information such as  default time zone, currency locale, and fiscal year start month. You can also find important information about your license usage.',
            link: {
                label: 'Learn more about NPSP Settings Trailhead'
            },
            buttonDark: {
                label: 'Set Defaults'
            }
        },
        { 
            id: 10,
            title: 'Adjust NPSP Settings',
            desc: 'Navigate to the NPSP Settings page and do a thorough review to confirm they are correct for your organization as well as functioning the way you expect them to.',
            buttonDark: {
                label: 'Adjust Settings'
            }
        },
        { 
            id: 11,
            time: '1 Minute Video',
            title: 'Customize Fields',
            desc: 'Learn how Object Manager configurs picklists, filters, formulas, and other tools to customize an object in your org. With these best practices in mind you can be sure you’re tracking precisely what your organization needs to measure your impact.',
            link: {
                label: 'Learn more about Object Manager in Trailhead'
            },
            buttonLight: {
                label: 'Go to Setup'
            },
            buttonDark: {
                label: 'Review Fields'
            }
        },
        { 
            id: 12,
            time: '1 Minute Video',
            title: 'Customize Page Layouts',
            desc: 'Take the time to customize how your instance looks and feels so you can be sure the right data is surfaced in the right places for the right people.',
            link: {
                label: 'Learn more about page layouts in Trailhead'
            },
            buttonLight: {
                label: 'Explore Layouts'
            },
            buttonDark: {
                label: 'Customize Pages'
            }
        },
        { 
            id: 13,
            time: '60 Minute Video',
            title: 'Import Data',
            desc: 'Before you do anything else, be sure to delete the out-of-the-box sample data included with your account. Then you’ll use the NPSP Data Importer to get your records into Salesforce. Finally, learn how ensure you aren’t surfacing duplicate data for your users.',
            link: {
                label: 'Learn more about importing data on Trailhead'
            },
            buttonLight: {
                label: 'Prevent Duplicates'
            },
            buttonDark: {
                label: 'Import Data'
            }
        },
    ]
}

const group3 = {   
    id: 3,
    title: 'Bring Your User Onboard',
    desc: 'Add your users to Salesforce and plan your rollout',
    steps: [
        { 
            id: 14,
            time: 'PDF Document',
            title: 'Add Users',
            desc: 'Give users access to NPSP and manage permissions for your org to ensure the right people have access to just what they need and nothing they don’t to keep things running smoothly.',
            link: {
                label: 'Learn more about adding users in Trailhead'
            },
            buttonLight: {
                label: 'Add Users'
            },
            buttonDark: {
                label: 'Learn about Profiles'
            }
        },
        { 
            id: 15,
            time: '1 Minute Video',
            title: 'Communicate with Your Users',
            desc: 'Long before you flip the switch and start using Salesforce, you should make a plan for communicating clearly, compassionately, and transparently with your organization about the shift.',
            link: {
                label: 'Learn more about user onboarding in Trailhead'
            },
            buttonDark: {
                label: 'Learn about Chatter'
            }
        },
        { 
            id: 16,
            time: '1 Minute Video',
            title: 'Train Your Users',
            desc: 'When the day finally comes for you to launch your instance, you want every user in your organization to be ready on day 1. That’s why it’s important to come up with a plan for onboarding your users and helping them get the most out of Salesforce.',
            link: {
                label: 'Learn more about onboarding in Trailhead'
            },
            buttonLight: {
                label: 'Get Training Help'
            },
            buttonDark: {
                label: 'Onboard Users'
            }
        },
        { 
            id: 17,
            time: '1 Minute Video',
            title: 'Go Further',
            desc: 'These initial steps and NPSP should be enough to get you started, but the possibilities with Salesforce are limitless. You can learn about additional features as well as some of the incredible things other organizations have accomplished with the platform.',
            link: {
                label: 'Learn about additional features in Trailhead'
            },
            buttonDark: {
                label: 'Discover Features'
            }
        },
        { 
            id: 18,
            title: 'Manage Changes to Your Instance',
            desc: 'Salesforce is updated frequently to address issues and add new features. Understanding these changes and how to manage that process it will ensure your organization will always be ready to take full advantage of the platform.',
            link: {
                label: 'Learn more about updating Salesforce in Trailhead'
            },
            buttonDark: {
                label: 'View Release Notes'
            }
        },
    ]
}


export default [
  group1, group2, group3
];