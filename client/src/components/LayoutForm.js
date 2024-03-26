import React from 'react';
import '../styles/styles.css'; // Import your styles
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from './UserForm'; // Import LayoutForm component
import Footer from './Footer';

const LayoutForm = () => {
  return (
    <div>
      <div id="wrap" className="oe_structure oe_empty"><style id="width-style"></style><style id="hover-styles"></style>
      
      <section
      className="o_colored_level bg-dark"
      data-name="Header RU transparent/07-15"
      data-snippet="s_header_ru"
      style={{ backgroundImage: 'none' }}
    >
      <header className="header_transparent">
      <div
        style={{
          left: '50%',
          transform: 'translate(50%, 40%)',
          maxWidth: '8.2857rem'  // Remove !important
        }}
        className="header__content absolute z-50 w-full pt-3.5 px-3.5 t:text-center sm:text-left sm:pt-10 sm:px-8 lg:px-4 lg:mx-auto xl:pt-20 xl:pb-10"
      >
        <img
          src="/images/logoTT.svg"
          alt=""
          className="w-36 sm:w-48 header__logo_img inline max-w-full max-h-16"  // Adjust width classes as needed
          loading="lazy"
          style={{
            animationPlayState: 'paused',
            transition: 'none 0s ease 0s',
            transform: 'translateX(18.4%) translateY(16.1%) scaleX(1.61) scaleY(1.61)'
          }}
          data-original-id="3950"
          data-original-src="/web/image/3950-c157dbc0/logoTT.svg"
          data-mimetype="image/svg+xml"
          data-resize-width="294"
        />
      </div>
    </header>
    </section>

    <section
      className="font-roboto bg-black o_colored_level pt96 pb56 oe_img_bg o_bg_img_center"
      data-snippet="s_banner"
      data-name="Banner/07-13"
      style={{
        backgroundImage: 'url("/images/2000x780-6.jpg")',
        backgroundPosition: '48.5074% 0%',
        backgroundSize: 'cover', // Make the image cover the entire container
        backgroundAttachment: 'fixed', // Optional: Keeps the image fixed while scrolling
        height: '100vh', // Set the height to the full viewport height
        margin: 0, // Remove default margin
        overflow: 'hidden', // Optional: Hides any overflowing content
      }}
      data-original-title=""
      title=""
      aria-describedby="tooltip839711"
      data-original-id="3941"
      data-original-src="/web/image/3941-96cd06db/2000x780-6.jpg"
      data-mimetype="image/jpeg"
      data-resize-width="1920"
      data-quality="100"
    >
<div className="t:max-w-full text-white px-3.5 pt-10 pb-5 xxl:px-6 sm:px-8 sm:pb-24 sm:pt-12 sm:mb-0 lg:pb-20 lg:px-4 lg:container lg:max-w-screen-xl lg:mx-auto xl:pt-20 xl:pb-44 container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div className="row sm:flex sm:justify-between lg:items-center lg:flex-nowrap">
        <div className="col-lg-6 flex row flex-row t:text-center relative sm:w-1/2 sm:flex sm:flex-row sm:text-left lg:w-full o_colored_level">
          <div className="sm:o_colored_level pt88 pb48 col-lg-12">
            <h1 style={{ fontFamily: 'Roboto-Medium' }} className="leading-normal text-5xl sm:text-4xl lg:text-6xl lg:leading-normal lg:max-w-none xl:text-7xl xl:max-w-none xl:leading-tight font-inside">
              <font style={{ color: 'rgb(237, 242, 88)' }} className="font-inside">
                <span style={{ fontSize: '4.28571rem !important' }}>Thời điểm để học giao dịch chứng khoán bằng robot!</span>
              </font>
              <br />
            </h1>
          </div>
          <div className="block sm:hidden o_colored_level">
            <img className="w-96 h-96" src="images1/img/transparent.png" alt="" loading="lazy" style={{ minHeight: '1px' }} data-lazy-loading-initial-min-height="" />
          </div>
          <div className="col-lg-12 o_colored_level pb88">
            <p style={{ color: '#009B7A', fontFamily: 'Roboto-Regular' }} className="text-lg lg:text-2xl font-inside">
              <span style={{ fontSize: '1.85714rem !important' }}>
                <font style={{}} className="text-white">Phát triển và cài đặt<br />hệ thống giao dịch bằng robot</font>&nbsp;
              </span>
              <br />
            </p>
          </div>
          <div className="btn-custom_wrap o_colored_level pt8 pb16 lg:mb-10">
              <a href="#form" style={{ fontFamily: 'Roboto-Medium', backgroundColor: 'rgb(237, 242, 88)', color: 'rgb(11, 31, 94)' }} className="relative inline-block mx-0 rounded lg:text-2xl btn btn-custom btn-lg font-inside">
                <span style={{ fontSize: '1.28571rem !important', fontWeight: 400 }}>Nhận robot qua email</span>
              </a>
            </div>
<p></p>
            {/* Second button */}
            <div className="btn-custom_wrap o_colored_level pt8 pb16">
              <a href="https://t.me/dautudedang" style={{ fontFamily: 'Roboto-Medium', backgroundColor: 'rgb(39, 163, 226)' }} className="relative inline-block mx-0 rounded lg:text-2xl btn btn-custom btn-lg font-inside">
                <span style={{ fontSize: '1.28571rem !important', fontWeight: 400 }}>
                  <font style={{}} className="text-white">&nbsp; Nhận qua Telegram&nbsp;&nbsp;</font>
                </span>
              </a>
            </div>
        </div>
      </div>
    </div>
    </section>

    <section className="o_colored_level pt-20 pb-20 mt-4 mb-4" style={{ backgroundImage: 'none' }}>
  <div className="container mx-auto px-4 lg:px-0">
    <div className="flex flex-col-reverse sm:flex-row sm:justify-between lg:flex-nowrap">
      {/* Left Content */}
      <div className="sm:w-7/12 mb-10 sm:pr-16 o_colored_level">
        <div className="pb-10 xl:pb-10">
          <h2 className="text-4xl font-bold max-w-md leading-tight sm:max-w-xl">
            Tương lai của ngành giao dịch – robot giao dịch!
          </h2>
        </div>
        <div className="pb-8 o_colored_level">
          <p className="text-gray-600">
            Robot giao dịch (Roboadvisor) – một cố vấn robot giao dịch tự động, được lập trình bằng các thuật toán đặc biệt nhằm tạo ra tín hiệu giao dịch tùy thuộc vào tình hình hiện tại trên thị trường, số dư và mong muốn của nhà giao dịch dựa trên các chiến lược đầu tư, mức độ rủi ro cũng như sở thích đối với các lĩnh vực trên thị trường tài chính. Vào năm 2017, chỉ có 13 triệu người trên toàn thế giới sử dụng robot giao dịch, tuy nhiên đến thời điểm này con số đó đã tăng gấp 5 lần – 70,5 triệu người. Số lượng nhà giao dịch sử dụng dịch vụ này tăng hơn 50% mỗi năm. Do đó, chúng ta có thể dự đoán rằng vào năm 2023 sẽ có 147 triệu người sử dụng robot giao dịch!
          </p>
        </div>
        <div className="btn-custom_wrap o_colored_level pb-8 pt-8">
          <a href="#form" className="inline-block rounded-lg lg:text-xl btn btn-custom btn-lg" style={{ color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(17, 47, 148)', fontFamily: 'Roboto-Medium' }}>
            Nhận robot
          </a>
        </div>
      </div>
<p></p>
      {/* Right Content */}
      <div className="sm:w-/12 mb-10 sm:mb-0 o_colored_level">
        <div className="container d-flex justify-content-center align-items-center">
          <img
            src="tt2/img/services/text_image.jpg"
            alt=""
            className="sm:max-w-full sm:h-auto sm:object-cover relative z-50 rounded"
            style={{ maxWidth: '100%', maxHeight: '200px' }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<section
  className="tt-ru o_colored_level"
  style={{ backgroundColor: 'rgb(237, 242, 88)', backgroundImage: 'none' }}
  data-name=" Process advance Ru/ 04-26"
>
  <div className="container mx-auto px-6 py-20 mt-5 mb-5  sm:flex sm:flex-row sm:flex-wrap lg:container lg:mx-auto lg:max-w-screen-xl lg:px-4 xl:text-left xl:py-32">
    <div className="row lg:flex-nowrap lg:justify-center">
      {/* Step 1 */}
      <div className="col-lg-3 relative mb-24 sm:mb-20 sm:w-full lg:w-1/4 xl:w-1/4 xl:px-5 o_colored_level text-left" style={{}}>
        <div className="col-lg-12 pb-3.5 sm:pb-6 mt-3 o_colored_level ">
          <h3 className="text-blue-900 text-2xl font-bold xl:text-3xl">Đăng ký</h3>
        </div>
        <div className="px-6 pb-6 sm:px-6 xl:px-0 o_colored_level col-lg-10 text-left">
          <p className="text-lg">Điền vào mẫu đăng ký và nhận 3 robot của chúng tôi hoàn toàn miễn phí qua email.</p>
        </div>
        <p style={{ fontFamily: 'Roboto-Black' }} className="start__num left-2/4 absolute top-10 roboto text-8xl font-bold text-gray-700 opacity-10 sm:top-8 xl:text-9xl xl:left-4">01.</p>
      </div>

      {/* Step 2 */}
      <div className="col-lg-3 relative mb-24 sm:mb-20 sm:w-full lg:w-1/4 xl:w-1/4 xl:px-5 o_colored_level">
      <div className="col-lg-12 pb-3.5 sm:pb-6 mt-3 o_colored_level ">
              <h3 className="text-blue-900 text-2xl font-bold xl:text-3xl o_default_snippet_text">Cài đặt</h3>
            </div>
            <div className="px-6 pb-6 sm:px-6 xl:px-0 o_colored_level col-lg-11">
              <p className="text-lg">Cài đặt robot trên nền tảng giao dịch của bạn theo hướng dẫn hoặc thông qua đội ngũ hỗ trợ của chúng tôi.</p>
            </div>
            <p style={{ fontFamily: 'Roboto-Black' }} className="start__num left-2/4 absolute top-10 roboto text-8xl font-bold text-gray-700 opacity-10 sm:top-8 xl:text-9xl xl:left-4">02.</p>
          </div>

      {/* Step 3 */}
      <div className="col-lg-3 relative mb-24 sm:mb-20 sm:w-full lg:w-1/4 xl:w-1/4 xl:px-5 o_colored_level">
      <div className="col-lg-12 pb-3.5 sm:pb-6 mt-3 o_colored_level ">
              <h3 className="text-blue-900 text-2xl font-bold xl:text-3xl">Thử nghiệm</h3>
            </div>
            <div className="px-6 pb-6 sm:px-6 xl:px-0 o_colored_level col-lg-11">
              <p className="text-lg">Thử nghiệm robot trên tài khoản demo để lựa chọn tỷ suất lợi nhuận/rủi ro phù hợp với bạn.</p>
            </div>
            <p style={{ fontFamily: 'Roboto-Black' }} className="start__num left-2/4 absolute top-10 roboto text-8xl font-bold text-gray-700 opacity-10 sm:top-8 xl:text-9xl xl:left-4">03.</p>
          </div>
      {/* Step 4 */}
      <div className="col-lg-3 relative sm:w-full lg:w-1/4 xl:w-1/4 xl:px-5 o_colored_level">
      <div className="col-lg-12 pb-3.5 sm:pb-6 mt-3 o_colored_level ">
              <h3 className="text-blue-900 text-2xl font-bold xl:text-3xl">Kết nối vào tài khoản</h3>
            </div>
            <div className="px-6 pb-6 sm:px-6 xl:px-0 o_colored_level col-lg-10">
              <p className="text-lg">Kết nối robot đã qua thử nghiệm vào tài khoản demo của nhà môi giới NPB.</p>
            </div>
            <p style={{ fontFamily: 'Roboto-Black' }} className="start__num left-2/4 absolute top-10 roboto text-8xl font-bold text-gray-700 opacity-10 sm:top-8 xl:text-9xl xl:left-4">04.</p>
          </div>
        </div>
      </div>
    </section>
{/* // form đăng ký */}

<UserForm />

    <section
      data-snippet="s_pricing_dark-ru"
      className="o_colored_level background-image: none;"
      data-name="Pricing dark Ru/ 07-14"
      data-original-title=""
      title=""
      style={{ backgroundColor: 'rgb(16, 41, 127)' }}
      aria-describedby="tooltip326763"
    >
      <div className="t:max-w-full px-3.5 mb-5 pb-5  t:text-center text-white py-20 lg:container lg:max-w-screen-xl lg:mx-auto lg:px-4 container">
        <div className="row lg:justify-center">
          <div className="col-lg-12 o_colored_level pt32 pb56 mb-5 mt-5">
            <h2 className="text-4xl px-2 font-bold pb-8 sm:pb-14 lg:px-0">
              Hãy thử nghiệm miễn phí các robot tốt nhất của chúng tôi! Top 3 robot giao dịch hiệu quả nhất. Thử nghiệm hoàn toàn miễn phí. Mỗi robot sẽ đi kèm hướng dẫn cài đặt trên nền tảng giao dịch.
            </h2>
          </div>
          <div className="ms-1 row sm:flex justify-between mb-5 lg:mb-10 lg:flex-nowrap lg:justify-center o_colored_level">
  {/* Robot 1 */}
  <div className="col-lg-4 sm:w-full lg:w-1/3 mb-2" style={{  borderRadius: '10px', height: '350px'}}>
    <div style={{ backgroundColor: '#040D3D', borderRadius: '10px', height: '350px' }}>    
    <div className="container">
      <div className="pt-5 py-10 px-3.5 pt-3   mb-10 sm:mx-4 lg:justify-center lg:px-16 xl:px-6">
        <div className="mb-14 sm:px-10 sm:mb-6 xl:mb-10 o_colored_level">
          <h4 className="font-bold text-2xl text-white text-center">Mới nhất</h4>
        </div>
        <div className="mt-3 mb-5  pb-6 o_colored_level ">
          <h3 className="text-blue-700 font-bold text-3xl sm:text-4xl xl:mb-10 o_default_snippet_text text-white text-center">R Smart Machine 2.2</h3>
        </div>
        <div className="pb-6 o_colored_level">
          <p className="text-lg sm:flex-grow text-white">Hệ thống chỉ báo giao dịch chống lại sự biến động kèm theo các khung thời gian: M1-H1, công cụ giao dịch phổ biến nhất: tiền tệ và kim loại.</p>
        </div>
        <div className="text-center pb-16 o_colored_level mb-2">
          <a href="#form" className="inline-block rounded-lg text-xl btn btn-custom btn-lg" style={{ color: '#fff', backgroundColor: '#112f94', fontFamily: 'Roboto-Medium' }}>Nhận qua email</a>
        </div>
      </div>
    </div>
  </div>
  </div>
  {/* Robot 2 */}
  <div className="col-lg-4 sm:w-full lg:w-1/3 mb-2 overflow-hidden" style={{ borderRadius: '10px', height: '350px', backgroundColor: '#040D3D', position: 'relative' }}>
  <div className="ribbon-container" style={{ position: 'absolute', left:'-35px', top: '65px', transform: 'rotate(-45deg)', transformOrigin: 'left top' }}>
    <div className="ribbon text-xs text-dark font-bold leading-none inline  px-5 rounded" style={{ backgroundColor: '#edf259' }}>VPS <br />
      <span style={{ transform: 'rotate(45deg)' }}>miễn phí</span>
    </div>
  </div>
  <div className="container">
    <div className=" pt-5  py-10 relative overflow-hidden px-3.5 mb-10 sm:mx-4 lg:justify-center lg:px-16 xl:px-6">
      <div className="mb-14 sm:px-10 sm:mb-6 xl:mb-10 o_colored_level">
        <h4 className="font-bold text-2xl  text-center" style={{ color: '#edf259' }}>Đáng tin cậy nhất</h4>
      </div>
      <div className="mt-3 mb-5  pb-6 o_colored_level">
        <h3 className="text-700 text-blue font-bold text-3xl sm:text-4xl xl:mb-10 o_default_snippet_text text-white text-center">EA Smart Machine 3.0</h3>
      </div>
      <div className="pb-6 o_colored_level">
        <p className="text-lg sm:flex-grow text-white">Các chỉ báo sử dụng công cụ phân tích VSA, khung thời gian: M5-M15, công cụ giao dịch: chỉ số chứng khoán, tiền tệ và nguyên liệu thô.</p>
      </div>
      <div className="text-center pb-16 o_colored_level mb-2">
        <a href="#form" className="inline-block rounded-lg text-xl btn btn-custom btn-lg" style={{ color: '#000', backgroundColor: '#edf259', fontFamily: 'Roboto-Medium' }}>Nhận qua email</a>
      </div>
    </div>
  </div>
</div>
  {/* Robot 3 */}
  <div className="col-lg-4 sm:w-full lg:w-1/3 mb-2" style={{  borderRadius: '10px', height: '350px'}}>
    <div style={{ backgroundColor: '#040D3D', borderRadius: '10px',  height: '350px' }}> 
        <div className="container">
      <div className=" pt-5  py-10 px-3.5   mb-10 sm:mx-4 lg:justify-center lg:px-16 xl:px-6">
        <div className="mb-14 sm:mb-6 xl:mb-10 o_colored_level">
          <h4 className="font-bold text-2xl text-white text-center">Chuyên nghiệp nhất</h4>
        </div>
        <div className="mt-3 mb-5  pb-6 o_colored_level">
          <h3 className="text-blue-700 font-bold text-3xl sm:text-4xl xl:mb-10 o_default_snippet_text text-white text-center">Deluxe Income Full</h3>
        </div>
        <div className="pb-6 o_colored_level">
          <p className="text-lg sm:flex-grow text-white">Hệ thống chỉ báo với các tính năng tùy chỉnh linh hoạt, khung thời gian: từ M1, công cụ giao dịch: cổ phiếu, chỉ số chứng khoán, tiền tệ và nguyên liệu thô.</p>
        </div>
        <div className="text-center o_colored_level pb-16 mb-2">
          <a href="#form" className="inline-block rounded-lg text-xl btn btn-custom btn-lg" style={{ color: '#fff', backgroundColor: '#112f94', fontFamily: 'Roboto-Medium' }}>Nhận qua email</a>
        </div>
      </div>
    </div>
    </div>
  </div>

  </div> 
  </div> 
  </div>
    </section>

    <section className="o_colored_level pt16 pb8" data-name=" Features Ru/ 05-30" style={{ backgroundImage: 'none' }}>
      <div className="container t:max-w-full py-20 px-6 t:text-center sm:px-8 lg:px-4 lg:container lg:max-w-screen-xl lg:mx-auto">
        <div className="row sm:flex sm:flex-wrap lg:justify-center">
          {/* Các thành phần con */}
          {/* Feature 1 */}
          <div className="col-lg-4 mb-10 sm:w-1/3 sm:px-2 xl:mb-20 o_colored_level">
          <div className="col-lg-12 pb-4 o_colored_level flex items-center justify-center">
              <img className="inline w-20 relative z-50" src="tt2/img/services/1.svg" alt="" width="70" loading="lazy" style={{}} />
            </div>
            <div className="col-lg-12 pb-4 o_colored_level">
              <h3 className="font-bold text-blue-900 text-2xl">
                Công nghệ môi giới
              </h3>
            </div>
            <div className="o_colored_level col-lg-11">
              <p className="text-lg sm:text-base text-gray-600">Mỗi robot của chúng tôi được tạo ra dựa trên quá trình làm việc của đội ngũ các nhà phân tích tài chính, lập trình viên và đều đã qua thử nghiệm.<br /></p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="col-lg-4 mb-10 sm:w-1/3 sm:px-2 xl:mb-20 o_colored_level">
          <div className="col-lg-12 pb-4 o_colored_level flex items-center justify-center">
              <img className="inline w-20 relative z-50" src="tt2/img/services/3.svg" alt="" width="70" loading="lazy" style={{}} />
            </div>
            <div className="col-lg-12 pb-4 o_colored_level">
              <h3 className="font-bold text-blue-900 text-2xl">
              Khách hàng tin tưởng
              </h3>
            </div>
            <div className="o_colored_level col-lg-11">
              <p className="text-lg sm:text-base text-gray-600">Hơn 70% khách hàng sử dụng robot của chúng tôi đều được giới thiệu bởi các nhà giao dịch khác.<br /></p>
            </div>
          </div>
          <div className="col-lg-4 mb-10 sm:w-1/3 sm:px-2 xl:mb-20 o_colored_level">
          <div className="col-lg-12 pb-4 o_colored_level flex items-center justify-center">
              <img className="inline w-20 relative z-50" src="tt2/img/services/4.svg" alt="" width="70" loading="lazy" style={{}} />
            </div>
            <div className="col-lg-12 pb-4 o_colored_level">
              <h3 className="font-bold text-blue-900 text-2xl">
              Đối tác tin cậy
              </h3>
            </div>
            <div className="o_colored_level col-lg-11">
              <p className="text-lg sm:text-base text-gray-600">Chúng tôi chỉ làm việc với các đối tác Ngân hàng và trung gian tài chính uy tín được cấp phép hợp pháp và không có bất cứ mâu thuẫn lợi ích nào.<br /></p>
            </div>
          </div>
          <div className="col-lg-4 mb-10 sm:w-1/3 sm:px-2 xl:mb-20 o_colored_level">
          <div className="col-lg-12 pb-4 o_colored_level flex items-center justify-center">
              <img className="inline w-20 relative z-50" src="tt2/img/services/5.svg" alt="" width="70" loading="lazy" style={{}} />
            </div>
            <div className="col-lg-12 pb-4 o_colored_level">
              <h3 className="font-bold text-blue-900 text-2xl">
              Hỗ trợ 24/5
              </h3>
            </div>
            <div className="o_colored_level col-lg-11">
              <p className="text-lg sm:text-base text-gray-600">Các nhà giao dịch sử dụng robot của chúng tôi sẽ được hỗ trợ kỹ thuật 24/24 trong các ngày làm việc và hỗ trợ phân tích bằng 8 ngôn ngữ<br/></p>
              </div>
          </div>
          <div className="col-lg-4 mb-10 sm:w-1/3 sm:px-2 xl:mb-20 o_colored_level">
          <div className="col-lg-12 pb-4 o_colored_level flex items-center justify-center">
  <img className="inline w-20 relative z-50 mx-auto" src="tt2/img/services/6.svg" alt="" width="70" loading="lazy" style={{}} />
</div>
            <div className="col-lg-12 pb-4 o_colored_level">
              <h3 className="font-bold text-blue-900 text-2xl">
              Trên toàn cầu
              </h3>
            </div>
            <div className="o_colored_level col-lg-11">
              <p className="text-lg sm:text-base text-gray-600">Robot của chúng tôi hiện đang được sử dụng bởi các nhà giao dịch trên 20 quốc gia tại thị trường chứng khoán và thị trường phi tập trung (OTC).<br/></p>
              </div>
          </div>
          <div className="col-lg-4 mb-10 sm:w-1/3 sm:px-2 xl:mb-20 o_colored_level">
            <div className="col-lg-12 pb-4 o_colored_level">
              <img className="inline w-20 relative z-50" src="tt2/img/services/2.svg" alt="" width="70" loading="lazy" style={{}} />
            </div>
            <div className="col-lg-12 pb-4 o_colored_level">
              <h3 className="font-bold text-blue-900 text-2xl">
              Đảm bảo độ tin cậy
              </h3>
            </div>
            <div className="o_colored_level col-lg-11">
              <p className="text-lg sm:text-base text-gray-600">Bạn có thể thử nghiệm robot trên tài khoản demo để kiểm tra tỷ suất lợi nhuận.<br/></p>
              </div>
          </div>
          {/* Feature 3, 4, 5, 6 */}
          {/* Các thành phần con giống như Feature 1 */}
        </div>
      </div>
    </section>

    
    <Footer />

    {/* <section className="bg-white font-roboto cookies-windows row t:mx-0 flex-col fixed t:left-3.5 t:bottom-3.5 sm:w-96 sm:left-6 sm:bottom-6 xl:left-11 xl:bottom-11 rounded-2xl py-10 px-7 o_colored_level shadow" data-name="cookies popup" style={{ backgroundColor: 'rgb(255, 255, 255)', zIndex: 130, backgroundImage: 'none', minWidth: 'auto !important', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 20px 0px !important' }}>
      <div className="col-lg-12 col-lg-custom flex-none">
        <h3 style={{ fontFamily: 'Roboto-Medium' }} className="text-xl m-0 t:pr-4" data-original-title="" title="" aria-describedby="tooltip728521">
          Trang web này sử dụng các tệp cookie
        </h3>
      </div>
      <div className="col-lg-12 col-lg-custom flex-none t:pt-4">
        <p style={{ fontFamily: 'Roboto-Regular', color: '#B0B0B0' }} className="text-base m-0" data-original-title="" title="" aria-describedby="tooltip295757">
          Trang web này sử dụng cookie để đảm bảo các chức năng cơ bản và nâng cao bảo mật. Chúng tôi cũng sử dụng cookie của bên thứ ba để cải thiện trải nghiệm duyệt web của bạn và nhắm mục tiêu quảng cáo. Xin tham khảo
          <font style={{ color: 'rgb(16, 41, 127)' }}>
            <a href="https://prod15temp.npbfx.com/privacy-policy" data-original-title="" title="">
              Chính sách bảo mật của chúng tôi.
            </a>
          </font>
          <a href="https://landing.autofx247.com/privacy-policy" url="/privacy-policy" style={{ color: '#009B7A !important', fontFamily: 'Roboto-Medium' }} className="o_default_snippet_text"></a>
        </p>
      </div>
      <div style={{ textAlign: 'center' }} className="btn-container col-lg-12 col-lg-custom flex-none t:pt-6">
        <a href="#" className="cookies__popup-close inline-flex justify-center items-center t:px-4 py-2 filter-none w-36 btn btn-custom" style={{ color: 'rgb(255, 255, 255)', fontFamily: 'Roboto-Medium', borderRadius: '0.3rem', fontSize: '1.25rem', borderWidth: '1px', borderStyle: 'solid', backgroundColor: 'rgb(17, 47, 148)', width: '17.1429rem !important' }} data-original-title="" title="" >
          Đồng ý
        </a>
      </div>
      <div className="cookies__popup-close cursor-pointer inline absolute right-3 top-3 o_colored_level" >
        <svg xmlns="http://www.w3.org/2000/svg" className="cookies__popup-close-icon" style={{ stroke: '#000' }} width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
    </section> */}
    </div>


    </div>
  );
};

export default LayoutForm;
