const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 89.99,
        rating: 4.5,
        reviews: 128,
        inStock: true,
        category: "Electronics",
        image: "https://picsum.photos/200/150",
        description: "หูฟังไร้สายระดับจักรวาล เสียงมาไวกว่าใจแฟนเก่า เบสแน่นจนเพื่อนบ้านคิดว่ามีคอนเสิร์ตส่วนตัว! รองรับคลื่นเสียง 10,000 Hz แบบไม่ดีเลย์"
    },
    {
        id: 2,
        name: "Laptop Stand",
        price: 49.99,
        isDiscount: false,
        rating: 4.8,
        reviews: 256,
        inStock: true,
        category: "Accessories",
        image: "https://fastly.picsum.photos/id/643/200/150.jpg?hmac=Upgyc8s0QQ-_DxehorwKqFk0-Xs5ccTiPIcR9JJWEn8",
        description: "ขาตั้งโน้ตบุ๊กที่ไม่ได้แค่ตั้งเครื่อง แต่ตั้งชีวิต! ปรับองศาได้จนรู้สึกเหมือนเป็น CEO บริษัทระดับโลก นั่งทำงานหลังตรงขึ้น 300% ความโปรเพิ่มทันทีแม้จะเปิด YouTube อยู่"
    },
    {
        id: 3,
        name: "Mechanical Keyboard",
        price: 129.99,
        isDiscount: false,
        originalPrice: 199.99,
        isDiscount: true,
        rating: 4.3,
        reviews: 89,
        inStock: false,
        category: "Electronics",
        image: "https://fastly.picsum.photos/id/498/200/150.jpg?hmac=UwjoXed1WDoT8MewpX6rGHPgkmNZI6ltsl_pAHQJbi4",
        description: "คีย์บอร์ดเสียงคลิกระดับตำนาน พิมพ์ทีเหมือนแฮ็ก NASA ได้จริง (แต่จริงๆ พิมพ์แชท) เสียงดังจนเพื่อนร่วมงานรู้ว่าคุณ 'กำลังทำงาน' ตลอดเวลา ของหมดเพราะคนกดกันมันส์เกิน!"
    },
    {
        id: 4,
        name: "USB-C Hub",
        price: 39.99,
        originalPrice: 89.99,
        isDiscount: true,
        rating: 4.6,
        reviews: 342,
        inStock: true,
        category: "Accessories",
        image: "https://fastly.picsum.photos/id/363/200/150.jpg?hmac=bwQK6Rqf9llvrdyf86V3ogtMhv5m0yemuc989WNbWUs",
        description: "ฮับตัวเล็กแต่พลังระดับ Avengers เสียบทีเดียวได้ทุกอย่าง ตั้งแต่แฟลชไดรฟ์ยันความหวังในชีวิต แปลงพอร์ตจนโน้ตบุ๊กคุณดูเหมือนยานอวกาศ พร้อมลุยทุกงาน"
    }
];
export default products;