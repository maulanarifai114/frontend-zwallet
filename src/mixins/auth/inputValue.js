export default {
  data () {
    return {
      username: '',
      email: '',
      password: '',
      newpassword: ''
    }
  },
  methods: {
    inputUsername (e) {
      this.username = e
    },
    inputEmail (e) {
      this.email = e
      this.checkEmail()
    },
    inputPassword (e) {
      this.password = e
      this.checkPassword()
    },
    inputNewPassword (e) {
      this.newpassword = e
      this.checkPassword()
    }
  }
}