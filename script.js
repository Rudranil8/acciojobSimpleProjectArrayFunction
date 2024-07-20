let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    // let a=[];
    // for(let i=0; i<arr.length; i++){
    //     if(arr[i].profession=="developer"){
    //         a.push(arr[i]["name"]);
    //     }
    // }
    // document.write(a.join("  "));
    let a=arr.map((x)=>{
      if(x["profession"]=="developer"){
        document.write(x.name,"\n");
      }
    })
  }
  // PrintDeveloperbyMap();
  function PrintDeveloperbyForEach() {
    // let a=arr.filter((x)=>x.profession=="developer");
    // document.write(a);
    let a=arr.forEach((item)=>{
      if(item.profession=="developer"){
        console.log(item.name);
      }
    })
  }
  // function xrr(b){
  //   for(let i=0; i<b.length; i++){
  //     let a=[];
  //     if(b.profession=="developer"){
  //       a.push(b.name);
  //     }
  //   }
  // }
  function addData() {
    // arr.push({ id: 4, name: "Sushant", age: "18", profession: "developer" }, { id: 5, name: "Abhijit", age: "20", profession: "developer" });
    arr.push( {id:4,name:"susan",age:"20",profession:"intern"});
    for(let i=0; i<arr.length; i++){
      document.write(`${arr[i]["id"]} ${arr[i]["name"]} ${arr[i]["age"]} ${arr[i]["profession"]}
        `);
    }
  }
  
  function removeAdmin() {
    let a=arr.filter((a)=>a.profession!=="admin");
    document.write(a);

  }
  
  function concatenateArray() {
    let c=[
        { id: 5, name: "Sushant", age: "18", profession: "developer" },
        { id: 6, name: "Abhijit", age: "20", profession: "developer" },
    ]
    let d=arr.concat(c);
    console.log(d);
  }