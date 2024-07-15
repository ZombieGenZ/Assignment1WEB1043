const data = [
    {
        src: "public/image/slide1.jpg",
        title: "Giải pháp học tập dành cho tất cả mọi người",
        description: "Hàng nghìn khóa học giúp bạn hoàn thành mục tiêu thành công, cả trong công việc và cuộc sống. Chỉ từ ₫ 299.000. Ưu đãi sẽ kết thúc hôm nay.",
    },
    {
        src: "public/image/slide2.jpg",
        title: "Rất nhiều lợi ích",
        description: "Tham gia danh sách email của chúng tôi để nhận ưu đãi đặc biệt, đề xuất khóa học cá nhân và nhiều nội dung khác.",
    },
    {
        src: "public/image/slide3.jpg",
        title: "Viết code cho tương lai của bạn",
        description: "Làm chủ sự nghiệp của bạn. Học các kỹ năng mới nhất về phát triển web.",
    },
];
let count = 0;

function PrevSlideShow() {
    count--;
    if ((count + 1) == 0) {
        count = data.length - 1;
    }
    document.getElementById("image=body-slideshow").src = data[count].src;
    document.getElementById("message-body-slideshow-header").textContent = data[count].title;
    document.getElementById("message-body-slideshow-content").textContent = data[count].description;
}

function NextSlideShow() {
    count++;
    if ((count + 1) > data.length) {
        count = 0;
    }
    document.getElementById("image=body-slideshow").src = data[count].src;
    document.getElementById("message-body-slideshow-header").textContent = data[count].title;
    document.getElementById("message-body-slideshow-content").textContent = data[count].description;
}