class Person {
    name
    age
    job
    id
    constructor(name, age, job, id) {
        this.name = name
        this.age = age
        this.job = job
        this.id = id

    }
}
class Family {
    familyMembers
    constructor() {
        this.familyMembers = [];
    }
    addmember(person) {
        this.familyMembers.push(person);
    }
    getmember() {
        for (let a of this.familyMembers) {
            console.log(a);
        }
    }
}
class Town {
    listFamilyMembers
    constructor() {
        this.listFamilyMembers = [];
    }
    addfamily(family) {
        this.listFamilyMembers.push(family);
    }
    getfamilies() {
        for (let b of this.listFamilyMembers) {
            console.log(b);
        }
    }
}


//các thành viên 
let a1 = new Person('lê văn a', 18, 'sinh viên', '1');
let a2 = new Person('lê văn b', 16, 'Học sinh', '2');
let a3 = new Person('lê văn c', 25, 'sinh viên', '3');
let a4 = new Person('lê thị a', 35, 'công nhân', '4');
let a5 = new Person('lê thị b', 64, 'giáo sư', '5');
let a6 = new Person('lê thị c', 43, 'bảo vệ', '6');
//các hộ gia đình
const family1 = new Family('Nha so 1')
family1.addmember(a1)
family1.addmember(a2)
family1.addmember(a3)
console.log(family1)
const family2 = new Family('Nha so 2')
family2.addmember(a4)
family2.addmember(a5)
family2.addmember(a6)
console.log(family2)
    // khu phố
let town = new Town()
town.addfamily(family1);
town.addfamily(family2);
//tt nhà 1
console.log(family1.getmember());
//thông tin nhà 2
console.log(family2.getmember());
//tt all
console.log(town.getfamilies());