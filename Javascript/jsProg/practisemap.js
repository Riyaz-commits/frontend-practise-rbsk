

  const user = [
        { firstname: "Mohammad", lastname: "Noushad", age: 22 },
        { firstname: "Aniket", lastname: "Bhalla", age: 45 },
        { firstname: "Rayyan", lastname: "Chand", age: 21 },
        { firstname: "Saif", lastname: "Siddiqi", age: 67 },
      ]


    const output=  user.reduce((acc,cur)=>
    {
        if(cur.age<30)
        {
            acc.push(cur.firstname)
        }
        else{

        }

        return acc
    },[])

    console.log(output)