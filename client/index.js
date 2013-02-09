if (Meteor.isClient) {
    Meteor.pages({
      '/': {to: 'index'},
      '/tempo': {to: 'tempo'},
    });
}

