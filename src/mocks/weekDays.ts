const weekDays = {
  'Monday': [],
  'Tuesday': [
    {
      id: '0',
      start: {
        hours: 11,
        minutes: 0
      },
      end: {
        hours: 14,
        minutes: 30
      }
    },
  ],
  'Wednesday': [
    {
      id: '1',
      start: {
        hours: 7,
        minutes: 30
      },
      end: {
        hours: 8,
        minutes: 30
      },
      description: "This time I'll be off."
    },
    {
      id: '2',
      start: {
        hours: 9,
        minutes: 0
      },
      end: {
        hours: 11,
        minutes: 0
      },
      description: "Not granting I'm going to be available this time."
    },
  ],
  'Thursday': [],
  'Friday': [
    {
      id: '3',
      start: {
        hours: 9,
        minutes: 45
      },
      end: {
        hours: 11,
        minutes: 0
      }
    },
  ],
  'Saturday': [],
  'Sunday': [
    {
      id: '4',
      start: {
        hours: 6,
        minutes: 0
      },
      end: {
        hours: 12,
        minutes: 0
      },
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a rhoncus metus, a fermentum risus. Aenean mollis ex ut neque eleifend dapibus. Cras id finibus odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: '5',
      start: {
        hours: 18,
        minutes: 0
      },
      end: {
        hours: 23,
        minutes: 59
      }
    }
  ]
}

export default weekDays