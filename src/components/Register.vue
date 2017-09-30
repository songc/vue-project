<template>
  <Form ref="formRegister" :model="user" :rules="rules">
    <FormItem label="username" prop="username">
      <Input v-model="user.username" placeholder="input username"></Input>
    </FormItem>
    <FormItem label="password" prop="password">
      <Input v-model="user.password" placeholder="input password"></Input>
    </FormItem>
    <!-- <FormItem label="password2" prop="password2">
      <Input  placeholder="input password again"></Input>
    </FormItem> -->
    <FormItem label="email" prop="email">
      <Input v-model="user.email"></Input>
    </FormItem>
    <FormItem label="Sex" prop="sex">
      <RadioGroup v-model="user.sex">
        <Radio label="man">Man</Radio>
        <Radio label="woman">Woman</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="address">
      <Input v-model="user.address" placeholder="input address"></Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit(formRegister)">Create</Button>
    </FormItem>
  </Form>
</template>

<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('input password'))
      } else {
        if (this.formCustom.passwdCheck !== '') {
                        // 对第二个密码框单独验证
          this.$refs.formCustom.validateField('passwdCheck')
        }
        callback()
      }
    }
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('input password again'))
      } else if (value !== this.formCustom.passwd) {
        callback(new Error('the password is same with the first!'))
      } else {
        callback()
      }
    }
    return {
      user: {
        username: '',
        password: '',
        email: '',
        sex: 'man',
        address: ''
      },
      rules: {
        username: [{required: true, message: 'username can not be null', trigger: 'blur'}],
        password: [
          {required: true, message: 'This can not be null', trigger: 'blur'},
          {validator: validatePass, trigger: 'blur'}
        ],
        passwords: [
          {required: true, message: 'This can not be null', trigger: 'blur'},
          {validator: validatePassCheck, trigger: 'blur'}
        ],
        email: [
          {required: true, message: 'email can not be null', trigger: 'blur'},
          {type: 'email', message: 'the format is error', trigger: 'blur'}
        ]
      }

    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$store.dispatch('register', this.$data.user).then(this.$Message.success('Success'))
        } else {
          this.$Message.error('valid fail')
        }
      })
    }
  }
}
</script>


