import React from 'react';


const Footer = () => {
return (
    <section className="o_colored_level pt32" style={{ backgroundColor: 'rgb(247, 248, 249)', backgroundImage: 'none' }}>
      <div className="relative t:max-w-full py-10 px-4 sm:px-8 lg:px-4 lg:container lg:max-w-screen-xl lg:mx-auto xl:pt-14">
        <a href="/">
          <img className="max-h-36 inline px-2 mt-4" src="tt2/img/services/logo-f.png" alt="" loading="lazy" style={{ transform: 'translateX(-1.9%) translateY(-26.2%) !important' }} />
        </a>
        <div class="row ">
        <div class="col-md-8 col-12">
            <div class="leading-tight py-5 px-4 sm:text-left xl:max-w-2xl xl:leading-tight">
                        Trang chủ được đội ngũ của phát triển nhằm mục đích cung cấp thông tin cho người dùng, không có bất kỳ nghĩa vụ nào khác và không phải là khuyến nghị đầu tư của không được cung cấp nhằm mục đích đưa ra bất kỳ quyết định nào, không phải và không được coi là: 1) cơ sở để thực hiện các giao dịch với bất kỳ công cụ tài chính nào; 2) đảm bảo hoặc hứa hẹn về tính hiệu quả của chiến lược trong tương lai mà người dùng đã lựa chọn và/hoặc khả năng sinh lời từ các giao dịch với công cụ tài chính; 3) thông tin mà người dùng có thể dựa vào để đưa ra quyết định liên quan đến hợp đồng hoặc thỏa thuận bất kỳ; 4) tư vấn tài chính hoặc đầu tư.
                    <br />
                    <br />
                    Công cụ tài chính được thảo luận trên trang này chỉ là ví dụ hoặc thông tin chung, người dùng cần tự đưa ra quyết định, sử dụng cố vấn tài chính nếu cần và dựa trên tình hình tài chính, cũng như mục tiêu cụ thể của từng cá nhân. Quan trọng nhất, người dùng cần liên hệ với các chuyên gia tư vấn độc lập nếu có bất kỳ nghi ngờ nào về tính phù hợp của thông tin được đăng tải trên trang chủ
                    <br />
                    <br />
                    <a className='text-dark' href="/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(33, 37, 41)' }}>
                    <u>Chính sách bảo mật</u>
                    </a>
                    <br />
            </div>
          </div>
            
          <div class="col-md-4 col-12">
          <div class="absolute py-5 px-4 right-10 top-10 sm:relative sm:right-0 sm:top-0 sm:flex sm:w-full sm:pl-0 2xl:pl-20">

      <a href="mailto:support.vietnam@tradingtime.io" className="flex mb-3 sm:mb-4">
              <img className="max-h-4" src="tt2/img/footer/mail.svg" alt="" loading="lazy" style={{
              width: '21px',
              height: '21px',
              fontSize: '14px',
              gridArea: 'auto',
              lineHeight: '21px',
              textAlign: 'left'
          }} />
                <span className="ml-2 px-2 text-900 o_default_snippet_text text-dark" style={{color: 'rgb(33, 37, 41) !important' }}>support.vietnam@tradingtime.io</span>
              </a>
              <p></p>
              <a href="https://t.me/dautudedang" className="text-black flex mb-3 sm:mb-4">
                <img className="max-h-4" src="tt2/img/footer/telega.svg" alt="" loading="lazy" style={{
              width: '21px',
              height: '21px',
              fontSize: '14px',
              gridArea: 'auto',
              lineHeight: '21px',
              textAlign: 'left'
          }} />
          
          <span className="ml-2 px-2 text-900 o_default_snippet_text" style={{ textDecoration: 'none' }}>t.me/dautudedang</span>
              </a>
              <p></p>

              <div class="flex mb-3 sm:mb-4">
                <img className="max-h-4" src="tt2/img/footer/time.svg" alt="" loading="lazy" style={{
              width: '21px',
              height: '21px',
              fontSize: '14px',
              lineHeight: '21px',
          }} />
               <span className="ml-2 px-2 text-900 o_default_snippet_text">Thứ 2 - Thứ 6, 24/5</span>
              </div>
              
              <div className="flex sm:mb-4">
                <img className="max-h-4" src="tt2/img/footer/qr.png" alt="" loading="lazy" style={{
              width: '140px',
              height: '140px',
              fontSize: '14px',
              gridArea: 'auto',
              lineHeight: '21px',
              textAlign: 'left'
          }} />
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
    
    
    );
        }

    export default Footer;
