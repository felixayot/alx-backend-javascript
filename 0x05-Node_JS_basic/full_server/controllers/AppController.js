// AppController class definition

class AppController {
  // Method to get the home page
  static getHomePage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

module.exports = AppController;
