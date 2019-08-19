import React, { Component } from 'react'
import axios from 'axios'
import SimpleReactValidator from 'simple-react-validator'

const API_PATH = '/api/contact/index.php';

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.validator = new SimpleReactValidator()
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: '',
      mailSent: false,
      mailError: null,
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();

    if (this.validator.allValid()) {
      axios({
        method: 'post',
        url: `${API_PATH}`,
        headers: { 'content-type': 'application/json' },
        data: this.state
      })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        })
      })
      .catch(error => {
        this.setState({ 
          mailError: error.message 
        })
      })
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      this.forceUpdate();
    }
  }

  render() {
    return (
      <form className='container w-full mx-auto max-w-lg' action='#'>
        <div className="flex flex-wrap mx-3 mb-6">
          <div class="w-full lg:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="fname">
              First Name
            </label>
            <input 
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
              id="fname"
              type="text" 
              placeholder="Jane"
              value={this.state.fname}
              onChange={e => this.setState({ fname: e.target.value })}
              required
            />
            {this.validator.message('first_name', this.state.fname, 'required|alpha')}
          </div>

          <div class="w-full lg:w-1/2 px-3">
            <label 
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
              for="lname"
            >
              Last Name
            </label>
            <input 
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
              id="lname"
              type="text" 
              placeholder="Doe"
              value={this.state.lname}
              onChange={e => this.setState({ lname: e.target.value })}
              required
            />
            {this.validator.message('last_name', this.state.lname, 'required|alpha')}
          </div>
        </div>

        <div class="flex flex-wrap mx-3 mb-6">
          <div class="w-full px-3">
            <label 
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input 
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="email" 
              type="email" 
              placeholder='jane@doe.com'
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              required
            />
            {this.validator.message('email', this.state.email, 'required|email')}
          </div>
        </div>

        <div class="flex flex-wrap mx-3 mb-6">
          <div class="w-full px-3">
            <label 
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="message"
            >
              Message
            </label>
            <textarea 
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="message" 
              placeholder='Your message here.'
              value={this.state.message}
              onChange={e => this.setState({ message: e.target.value })}
              required
            />
            {this.validator.message('message', this.state.message, 'required|max:1000')}
          </div>
        </div>

        <div class="flex flex-wrap mx-3 mb-6">
          {this.state.mailSent &&
            <div role='alert'>
              <div class="bg-green-500 text-white font-bold rounded-t px-4 py-2">
                Thank you!
              </div>
              <div class="border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700">
                <p>Your message has been sent. We will contact you soon.</p>
              </div>
            </div>
          }

          {this.state.mailError &&
            <div role='alert'>
              <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                Oops!
              </div>
              <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                <p>Sorry, there was a problem sending your message. Please refresh browser and try again. If problem persists, please use other contact channels. Thanks!</p>
              </div>
            </div>
          }

          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-4 mb-8 py-2 px-4"
            type='submit' 
            onClick={e => this.handleFormSubmit(e)} 
          >
            Send Message
          </button>
        </div>

      </form>
    )
  }
}

export default ContactForm