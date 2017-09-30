<template>
    <Form ref="formLogin" :model="user" :rules="ruleInline">
        <FormItem prop="user">
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
            <Button type="primary" @click="handleSubmit('formLogin')">登录</Button>
        </FormItem>
    </Form>
</template>
<script>
    export default {
      data () {
        return {
          user: {
            username: '',
            password: ''
          },
          ruleInline: {
            user: [
              { required: true, message: '请填写用户名', trigger: 'blur' }
            ],
            password: [
              { required: true, message: '请填写密码', trigger: 'blur' },
              { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
            ]
          }
        }
      },
      methods: {
        handleSubmit(name) {
          this.$refs[name].validate((valid) => {
            if (valid) {
              this.$Message.success('提交成功!')
            } else {
              this.$Message.error('表单验证失败!')
            }
          })
        }
      }
    }
</script>

