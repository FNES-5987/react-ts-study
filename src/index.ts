// ecmascripts(es, js)
// const person = {username:"Alice", age:30};
// const {username, age} = {username:"Alice", age:30}
// username, age

import { appName, greet, user } from "./module";
// 디푤트 모듈
// 자동완성으로 파일명과 모듈명을 동일하게 해줌
// import module from "./module";
import metadata from "./module";

// 타입 추론
// let name = "Javascripts";

// 타입 선언
let name : string;
// name = 1;
name = "Javascripts";

console.log(greet(`${name}-${appName}
-${metadata.version}-${metadata.creator}
-${user.name}-${user.age}`, "male")
);

document.getElementById("root").innerHTML = greet(`${name}-${appName}
-${metadata.version}-${metadata.creator}
-${user.name}-${user.age}`);