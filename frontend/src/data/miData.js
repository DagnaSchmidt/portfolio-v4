export const miData = {
    prevImg: [
        'mi_mobile_1.png',
        'mi_mobile_2.png',
        'mi_mobile_3.png'
    ],
    background: {
        title: 'Background',
        description: "When seeking calendar app recommendations from friends, I discovered a shared opinion — each one of them faced challenges in discovering an app that comprehensively met their unique needs. These needs varied significantly among my friends, highlighting the diversity of user preferences. Motivated by this realization, I envisioned a solution: a foundational calendar app with extensive customization possibilities.",
    },
    goal: {
        title: 'Goal',
        description: "The core idea is to empower users to create their calendar experience by deciding which features they wish to use, providing a tailored solution for individualized scheduling needs."
    },
    research: {
        title: 'Research',
        description: "I decided to do competitive research on top calendar related apps. I also conducted in-depth user interviews, which helped me create two completely different user personas and journey maps. I've found that apps that have a lot of customization options require a learning curve for new users and are complicated to use."
    },
    solution: {
        title: 'My solution',
        description: "To avoid learning curve and provide intuitive experience, I added easy-to-use templates and features highlights. I gave the user an opportunity to choose which features would be displayed in their calendar app."
    },
    journeyMaps: {
        title: 'Journey map and User Persona',
        maps: [
            {
                id: 1,
                persona: 'Designer Ted',
                scenario: 'Freelance, skilled designer, trying to organize deadlines, meetings and coordination of collaborators. Ted is an immigrant, residing in a different time zone than his actual home. Desires a user-friendly interface that seamlessly transitions between his mobile and laptop devices, both at work and home.',
                expectations: [
                    'A straightforward method to create projects, set deadlines, and share them with team members.',
                    'Streamlined processes for creating meetings and inviting collaborators.',
                    'An easy way to set up notifications that matter, ensuring no crucial deadline or meeting is missed.',
                    'Effortless switching of calendar views, including time zone adjustments and flexible week layouts.'
                ],
                image: 'mi_journey_map_ted.png',
                personaImage: 'mi_persona_ted.png'
            },
            {
                id: 2,
                persona: 'Content Writer Kasia',
                scenario: 'Remote worker navigating the delicate balance of professional commitments and a personal life. Kasia seeks an solution that harmoniously manages her health and the well-being of her three cats.',
                expectations: [
                    'A straightforward method for accurately recording and monitoring working hours.',
                    'A dedicated space within the calendar to track menstrual and ovulation cycles discreetly.',
                    'An easy-to-use system to manage her three feline companions medications, vet visits, and timely reminders.'
                ],
                image: 'mi_journey_map_kasia.png',
                personaImage: 'mi_persona_kasia.png'
            }
        ]
    }
}
