document.querySelector(".global-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const data = {
        email: formData.get("email").trim(),
        password: formData.get("password").trim(),
        first_name: formData.get("first_name").trim(),
        last_name: formData.get("last_name").trim(),
        address: formData.get("address").trim(),
    };

    if (Object.values(data).some(value => !value)){
        alert(`You are missing field please check again`);
        return;
    }
    console.log(data);

    //  try {
    //     const ulr = "localhost:8080/examaple"
    //     const response = await fetch(ulr, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(formData)
    //     })
    //      const result = response.json()
    //      if(response.ok){
    //         console.log(result)
    //      } else {
    //         throw Error(result.error)
    //      }
        
    // } catch (error) {
    //     console.log(error)
    // }
});
