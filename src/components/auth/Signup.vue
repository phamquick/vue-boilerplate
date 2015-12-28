<style></style>
<template>
	<div class="col-sm-4 col-sm-offset-4">
		<h2>Sign Up</h2>
		<p>Log in to your account to get some great quotes.</p>
		<div class="alert alert-danger" v-if="error">
			<p>{{ error }}</p>
		</div>
		<div class="form-group">
			<input 
			type="text" 
			class="form-control"
			placeholder="Enter your username"
			v-model="credentials.username"
			>
		</div>
		<div class="form-group">
			<input
			type="password"
			class="form-control"
			placeholder="Enter your password"
			v-model="credentials.password"
			>
		</div>
		<div class="form-group">
			<input
			type="email"
			class="form-control"
			placeholder="Enter your email"
			v-model="credentials.email"
			>
		</div>

		<button class="btn btn-primary" @click="submit()">Signup</button>
	</div>

</template>
<script>
	import auth from '../../services/Auth'

	export default {
		data(){
			return {
				credentials: {
					username: '',
					password: ''
				},
				profiles: {
					firstname: '',
					lastname:'',
					phone:''
				},
				error: ''
			}
		},
		methods: {
			submit() {
				var credentials = {
					email: this.credentials.email,
					username: this.credentials.username,
					password: this.credentials.password
				}
				var profiles = this.profiles;
				auth.signup(this ,credentials, profiles, 'home')
			}
		}

	}
</script>