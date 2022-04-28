

		const btn = document.getElementById("forgetmail");
		let forgermail = $("#mail");
		document.getElementById("form").addEventListener("submit", function (event) {
			event.preventDefault();

			if ($(forgermail).val() != "") {
				var that = this;
				$.ajax({
					type: "POST",
					url: "./php/member/Memberforgetemail.php",
					dataType: "json",
					async: false,
					data: {
						mail: forgermail.val(),
					},
					success: function (data) {
						let passwordvalue = data[0].PASSWORD;
						let PASSWORDcode = document.getElementById("PASSWORD");
						PASSWORDcode.value = passwordvalue;
						const serviceID = "default_service";
						const templateID = "template_1idmmrm";
						emailjs.sendForm(serviceID, templateID, that).then((event) => {
							alert(
								"The password has already sent into your email address, please check it."
							);
							window.location.href = "front_member.html";
						});
					},
				});
			} else {
				alert("Please type your mail");
			}
			let PASSWORD = document.getElementById("PASSWORD");
			if ($(forgermail).val() != "" && PASSWORD.value == "") {
				alert("No such registered mail");
			}
		});




