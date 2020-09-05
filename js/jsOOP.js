var nhanVien= new nhanVien();
var xuLyThongTin= function(){
nhanVien.maNhanVien= document.querySelector('#maNhanVien').value;
nhanVien.tenNhanVien= document.querySelector('#tenNhanVien').value;
nhanVien.chucVu= document.querySelector('#chucVu').value;
nhanVien.luong= document.querySelector('#luong').value;
nhanVien.thoiGianLamViec= document.querySelector('#thoiGianLamViec').value;

// select option trả về giá trị mảng
var tenChucVu= document.querySelector('#chucVu').options[document.querySelector('#chucVu').selectedIndex].innerHTML;
// console.log(nhanVien.chucVu);

if(nhanVien.maNhanVien===''||nhanVien.tenNhanVien===''||nhanVien.chucVu==='0'||nhanVien.luong===''||nhanVien.thoiGianLamViec===''){
alert('Mời bạn nhập đầy đủ thông tin');
    if (nhanVien.maNhanVien===''){
        document.querySelector('#maNhanVien').className='form-control border border-danger';
    } else {
        document.querySelector('#maNhanVien').className='form-control';
    }

    if (nhanVien.tenNhanVien===''){
        document.querySelector('#tenNhanVien').className='form-control border border-danger';
    } else {
        document.querySelector('#tenNhanVien').className='form-control';
    }

    if (nhanVien.chucVu==='0'){
        document.querySelector('#chucVu').className='form-control border border-danger';
    }else {
        document.querySelector('#chucVu').className='form-control';
    }

    if (nhanVien.luong===''){
        document.querySelector('#luong').className='form-control border border-danger';
    }else {
        document.querySelector('#luong').className='form-control';
    }

    if (nhanVien.thoiGianLamViec===''){
        document.querySelector('#thoiGianLamViec').className='form-control border border-danger';
    }else {
        document.querySelector('#thoiGianLamViec').className='form-control';
    }
}
else{
    document.querySelector('#maNhanVien').className='form-control';
    document.querySelector('#tenNhanVien').className='form-control';
    document.querySelector('#chucVu').className='form-control';
    document.querySelector('#luong').className='form-control';
    document.querySelector('#thoiGianLamViec').className='form-control';

    domID('txtTenNhanVien').innerHTML=nhanVien.tenNhanVien;
    domID('txtMaNhanVien').innerHTML=nhanVien.maNhanVien;
    domID('txtChucVu').innerHTML=tenChucVu;
    domID('txtTongLuong').innerHTML=nhanVien.tongLuong();
    domID('txtXepLoai').innerHTML=nhanVien.xepLoai();
}

}
var xuLyThongTin1= function(){
    nhanVien.maNhanVien= document.querySelector('#maNhanVien').value;
    nhanVien.tenNhanVien= document.querySelector('#tenNhanVien').value;
    nhanVien.chucVu= document.querySelector('#chucVu').value;
    nhanVien.luong= document.querySelector('#luong').value;
    nhanVien.thoiGianLamViec= document.querySelector('#thoiGianLamViec').value;
    
    // select option trả về giá trị mảng
    var tenChucVu= document.querySelector('#chucVu').options[document.querySelector('#chucVu').selectedIndex].innerHTML;
    // console.log(nhanVien.chucVu);
    
    if(nhanVien.maNhanVien===''||nhanVien.tenNhanVien===''||nhanVien.chucVu==='0'||nhanVien.luong===''||nhanVien.thoiGianLamViec===''){
    alert('Mời bạn nhập đầy đủ thông tin');
    document.getElementById('hienThiThongTin__RPS').dataset.target='#exampleModal1';
        if (nhanVien.maNhanVien===''){
            document.querySelector('#maNhanVien').className='form-control border border-danger';
        } else {
            document.querySelector('#maNhanVien').className='form-control';
        }
    
        if (nhanVien.tenNhanVien===''){
            document.querySelector('#tenNhanVien').className='form-control border border-danger';
        } else {
            document.querySelector('#tenNhanVien').className='form-control';
        }
    
        if (nhanVien.chucVu==='0'){
            document.querySelector('#chucVu').className='form-control border border-danger';
        }else {
            document.querySelector('#chucVu').className='form-control';
        }
    
        if (nhanVien.luong===''){
            document.querySelector('#luong').className='form-control border border-danger';
        }else {
            document.querySelector('#luong').className='form-control';
        }
    
        if (nhanVien.thoiGianLamViec===''){
            document.querySelector('#thoiGianLamViec').className='form-control border border-danger';
        }else {
            document.querySelector('#thoiGianLamViec').className='form-control';
        }
    }
    else{
        document.getElementById('hienThiThongTin__RPS').dataset.target='#exampleModal';
        document.querySelector('#maNhanVien').className='form-control';
        document.querySelector('#tenNhanVien').className='form-control';
        document.querySelector('#chucVu').className='form-control';
        document.querySelector('#luong').className='form-control';
        document.querySelector('#thoiGianLamViec').className='form-control';
        domID('txtTenNhanVien1').innerHTML=nhanVien.tenNhanVien;
        domID('txtMaNhanVien1').innerHTML=nhanVien.maNhanVien;
        domID('txtChucVu1').innerHTML=tenChucVu;
        domID('txtTongLuong1').innerHTML=nhanVien.tongLuong();
        domID('txtXepLoai1').innerHTML=nhanVien.xepLoai();
    }
    
    }

var domID= function(id){
    return document.querySelector('#'+id);
}

document.querySelector('#hienThiThongTin').onclick= xuLyThongTin;
document.querySelector('#hienThiThongTin__RPS').onclick= xuLyThongTin1;