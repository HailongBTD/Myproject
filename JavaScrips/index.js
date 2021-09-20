var friend = [ 'Long','Hoang']
friend[friend.length] = 'Tung'
var profile = {
    ten: 'Hai Long',
    tuoi : 21,
    xe : [ 'BMW' , 'porsche','lamborghini' ],
    ban : friend,
    que : {
        tinh : 'QN',
        thanhpho : 'CP',
        xa : 'CS',
        
    },
    nguoiyeu : 'khong co'
}
profile.xe[profile.xe.length] = 'oi ban oi'

console.log(profile.xe)