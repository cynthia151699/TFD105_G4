		new Vue({
			el: "#appapp",

			data: {
				MEMBER: {
					NAME: "",
					mail: "",
					PASSWORD: "",
					PHONE: "",
				},
			},
			mounted() {
				fetch("./php/member/MemberSearch.php")
					.then((res) => res.json())
					.then((res) => {
						this.MEMBER = res[0];
					});
			},
			methods: {
			},
		});
