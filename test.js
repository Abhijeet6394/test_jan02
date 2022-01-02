let fullbox = document.getElementById('fullbox')
let fullimg = document.getElementById('fullimg')

function openFullimg(picture){
    fullbox.style.display = 'flex';
    fullimg.src=picture;
}
function closeimg(){
    fullbox.style.display = 'none';

}
