var nhanVien= function(){
    this.maNhanVien="";
    this.tenNhanVien="";
    this.chucVu="";
    this.luong="";
    this.thoiGianLamViec="";

    this.xepLoai= function(){
        if(Number(this.thoiGianLamViec)>120){
            return 'Nhân Viên Xuất Sắc';
        } else if(Number(this.thoiGianLamViec)>100){
            return 'Nhân Viên Giỏi';
        } else if(Number(this.thoiGianLamViec)>80){
            return 'Nhân Viên Khá';
        } else if(Number(this.thoiGianLamViec)>50){
            return 'Nhân Viên Trung Bình';
        } else{
            return 'Không Được Xếp Loại';
        }
    };

    this.tongLuong= function(){
        if (Number( this.chucVu)===1){
            return (Number(this.luong)*3).toLocaleString();
        } else if (Number( this.chucVu)===2){
            return (Number(this.luong)*2).toLocaleString();
        } else if (Number( this.chucVu)===3){
            return (Number(this.luong)*1).toLocaleString();
        }
    }

}