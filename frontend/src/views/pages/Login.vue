<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="6" sm="12">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <div class="form-group row">
                    <div class="col-12">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <CIcon name="cil-user"/>
                          </div>
                        </div> 
                        <input name="text" type="text" v-model="username" class="form-control" placeholder="Username or Email">
                      </div>
                    </div>
                  </div> 
                  <div class="form-group row">
                    <div class="col-12">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <CIcon name="cil-lock-locked"/>
                          </div>
                        </div> 
                        <input name="text" type="password" v-model="password" class="form-control" placeholder="Password">
                      </div>
                    </div>
                  </div>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton @click="login" color="primary" class="px-4">Login</CButton>
                    </CCol>
                    <CCol col="6" class="text-right">
                      <CButton color="link" class="px-0"><small>Forgot password?</small></CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    login(){
      this.$store.dispatch(
        'account/login', 
        {
          username: this.username,
          password: this.password
          }
      );
    }
  },
  data: function() {
    return {
        username: '',
        password: '',
    }
  },
  // mounted: function(){
  //   console.log(this.$swal);
  //   this.$swal.renderMessage('Hello', 'This is a warning', 'warning')
  // }
}
</script>
