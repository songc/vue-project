<template>
  <Form ref="formRegister" :model="user" :rules="rules">
    <FormItem label="Username" prop="username">
      <Input v-model="user.username" placeholder="input username"></Input>
    </FormItem>
    <FormItem label="Password" prop="password">
      <Input v-model="user.password" placeholder="input password"></Input>
    </FormItem>
    <FormItem label="Email" prop="email">
      <Input v-model="user.email"></Input>
    </FormItem>
    <FormItem label="Sex" prop="sex">
      <RadioGroup v-model="user.sex">
        <Radio label="man">Man</Radio>
        <Radio label="woman">Woman</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="Address">
      <Input v-model="user.address" placeholder="input address"></Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formRegister')">Create</Button>
    </FormItem>
  </Form>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
        email: '',
        sex: 'man',
        address: ''
      },
      rules: {
        username: [{required: true, message: "Username can't be null", trigger: 'blur'}],
        password: [
          {required: true, message: "This can't be null", trigger: 'blur'},
          {type: 'string', min: 6, message: 'At least 6 characters', trigger: 'blur'}
        ],
        email: [
          {required: true, message: "Email can't be null", trigger: 'blur'},
          {type: 'email', message: 'The format is error', trigger: 'blur'}
        ]
      }

    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$store.dispatch('register', this.user).then(() => {
            this.$router.push(`/user/${this.$store.state.user.id}/dataset`)
            this.$Message.success('Register Success')
          })
        } else {
          this.$Message.error('valid fail')
        }
      })
    }
  }
}
</script>


