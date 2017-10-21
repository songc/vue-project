<template>
    <Form ref="formLogin" :model="user" :rules="ruleInline">
        <FormItem prop="username">
            <Input type="text" v-model="user.username" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="user.password" placeholder="Password">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formLogin')">Login</Button>
        </FormItem>
    </Form>
</template>
<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      ruleInline: {
        username: [
          { required: true, message: "This can't be null", trigger: 'blur' }
        ],
        password: [
          { required: true, message: "This can't be null", trigger: 'blur' },
          {
            type: 'string',
            min: 6,
            message: 'at least 6 characters',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$store
            .dispatch('login', this.user)
            .then(user => {
              this.$router.push({
                name: 'dashBoard',
                params: { id: this.$store.state.user.id }
              })
              this.$emit('on-success')
              this.$Message.success('Login success!')
            })
            .catch(res => {
              this.$Notice.error({
                title: 'Login Fail',
                desc: res
              })
            })
        } else {
          this.$Message.error('Something error!')
        }
      })
    }
  }
}
</script>

