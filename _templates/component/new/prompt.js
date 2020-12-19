module.exports = [
  {
    type: 'select',
    name: 'type',
    message: "Select the component type:",
    choices: ['atom', 'molecule', 'organism']
  },
  {
    type: 'input',
    name: 'name',
    message: "What is the name of your component?",
  }
]
