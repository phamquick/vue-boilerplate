export default {
	user: {
		authenticated: false,
		token: false
	},
	login(context,credentials,redirect){
		var self = this;
		//Gửi yêu cầu đăng nhập tới Parse
		Parse.User.logIn(credentials.username, credentials.password, {
			success: function(user) {
				//Gán biến đã chứng thực về True
				self.user.authenticated = true

				//Chuyển hướng nếu được thiết lập
				if(redirect) {
					router.go(redirect)        
				}
			},
			error: function(user, error) {
				//Thông báo lỗi tới người dùng
				context.error = error.code +": "+error.message;
			}
		});
	},
	signup(context,credentials,profiles,redirect){
		var self = this;

		//Tạo ra một object User
		var user = new Parse.User();

		//Thiết lập thông tin chứng thực
		user.set("username", credentials.username);
		user.set("password", credentials.password);
		user.set("email", credentials.email);
		
		//Thiết lập thông tin cá nhân
		user.set("firstname", profiles.firstname);
		user.set("lastname", profiles.lastname);
		user.set("phone", profiles.phone);
		
		//Gửi yêu cầu đăng ký
		user.signUp(null, {
			success: function(user) {

				//Gán biến đã chứng thực về True
				self.user.authenticated = true

				//Chuyển hướng nếu được thiết lập
				if(redirect) {
					router.go(redirect)        
				}
			},
			error: function(user, error) {
				//Thông báo lỗi tới người dùng
				context.error = error.message+" ("+error.code +")";
			}
		});
	},
	logout(){
		var self = this;
		//Gửi yêu cầu đăng xuất tới Parse
		var Logout = Parse.User.logOut().done(function(){
			//Gán biến đã chứng thực về FALSE
			self.user.authenticated = false
		});
	},
	checkAuth() {
		//Yêu cầu thông tin người dùng hiện tại
		var currentUser = Parse.User.current();

		//Nếu người dùng đang đăng nhập
		if (currentUser) {
			//Gán biến đã chứng thực về True
			this.user.authenticated = true

			return true
		} else {
			//Gán biến đã chứng thực về False
			this.user.authenticated = false
			
			return false	
		}
	},
	requestPasswordReset(context,email,redirect){
		Parse.User.requestPasswordReset(email, {
			success: function() {
				if(redirect){
					router.go(redirect);
				}
			},
			error: function(error) {
				context.error = error.message+" ("+error.code +")";
			}
		});
	},
	hasRole(roleName){
		var roleQuery = (new Parse.Query(Parse.Role));
		roleQuery.equalTo("name", roleName);
		roleQuery.equalTo("users", Parse.User.current());
		roleQuery.first().then(function(Role) {


			if (Role) {
				console.log("true");
				return true;
			} else {
				return false;
			}
			console.log(Role);

		});
	}
}