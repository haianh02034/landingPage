// src/components/UserForm.js
import React from 'react';
import '../styles/styles.css'; // Import CSS file

const UserForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic gửi form tại đây
  };

  return (
    <section
  data-snippet="s_info-ru-url-politic"
  style={{
    backgroundColor: 'rgb(11, 31, 94)',
    backgroundImage: 'url("tt2/img/services/info__form.jpg")',
    
    paddingRight: '1rem', // hoặc 'sm:pt-0' nếu bạn muốn giữ logic responsivity
    color: '#ffffff', // Mặc định màu chữ là trắng
    backgroundImageSize: 'cover',
    backgroundPosition: '-50% center',
  }}
  className="main-info-form-2 campaign-form url class-form pt-1 pb-1 sm:pt-0 lg:py-20 o_colored_level oe_img_bg o_bg_img_center"
  data-name="Form + Image + Privacy Policy"
  id="form"
  data-anchor="true"
>
<div className="t:max-w-full text-white xl:px-4 xl:container xl:max-w-screen-xl container">
        <div className="sm:flex sm:flex-row sm:justify-end sm:items-center xl:flex-nowrap">
        <div
    id="main-info-form-success"
    className="col-lg-4 w-full form-block t:pt-10 t:pb-14 t:px-4.5 sm:w-1/2 sm:py-10 sm:px-12 lg:px-6 lg:py-16 xl:px-12 d-none"
    style={{ display: 'none' }}
  >
            <p className="mb-0 t:text-left text-2xl py-36 form-success-text o_default_snippet_text">
              Liên kết để tải robot đã gửi đến Email của bạn
            </p>
          </div>
          <div
  className="custom-width w-20vw max-w-full form-block t:pt-10 t:pb-14 t:px-4.5 sm:w-1/2 sm:py-10 sm:px-12 xl:py-16 xl:w-4/12 xl:px-12"
  style={{
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingRight: '1rem',
    width: '20vw',
    minWidth: '320px',
    minHeight: '270px',
    margin: '9% 0 5rem 0', // Căn giữa ngang theo chiều rộng
    order: 1,
  }}
  
>

            <form className="main-form row flex-col mx-4 my-2" id="main-info-form" name="mainform" method="post" action="https://odoo-prod-apitemp.npbfx.com/form">
              <div className="t:pb-8 col-lg-12 col-lg-custom flex-none t:text-left text-center sm:pr-0 sm:pb-10 xl:pb-8 o_colored_level mt-5 mb-3">
              <p className="mb-1 text-3xl leading-tight xl:leading-tight" style={{ fontSize: '1.1rem' }}>
                  Hãy điền vào mẫu đăng ký và<br />nhận robot miễn phí!<br />
                </p>
              </div>
              <div className="t:pb-4 col-lg-12 col-lg-custom flex-none mb-2 o_colored_level">
              <input class="input name-field form-control col-12" autoComplete="off" name="name" type="text" required="true" id="main-name" pattern="^[^-\s][\p{L}\s-]+$" placeholder="Họ tên" />
              </div>
              <div className="t:pb-4 col-lg-12 col-lg-custom flex-none mb-2 o_colored_level">
              <input class="input email-field form-control col-12" autoComplete="off" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" name="email" type="email" required="true" id="main-email" placeholder="Email" />
              </div>
              <div className="t:pb-4 col-lg-12 col-lg-custom flex-none mb-2 o_colored_level">
              <input class="input email-field form-control col-12" autoComplete="off" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" name="email" type="email" required="true" id="main-email" placeholder="Email" />
              </div>
              

              <div className="invisible h-0 o_colored_level">
              <input type="submit" class="invisible h-0" id="main-info-form_submit" />
              </div>
              <div className="col-lg-12 t:pt-2 col-lg-custom text-center o_colored_level btn-container">
                <a
                  href="#"
                  id="main-info-form_btn"
                  className="inline-flex justify-center items-center w-full t:py-3.5 t:py-8 center-mob filter-none rounded lg:text-xl btn btn-custom btn-lg"
                  style={{ color: '#fff', backgroundColor: '#112f94', fontFamily: 'Roboto-Medium' }}
                >
                  Nhận robot qua email
                </a>
              </div>
              <div className="col-lg-12 mt-3 mb-3 t:pt-6 col-lg-custom flex-none o_colored_level">
                <p style={{ fontSize: '0.7rem' }} className="t:m-0">
                  Bằng cách nhấp vào nút gửi, bạn đồng ý với việc xử lý dữ liệu cá nhân của mình theo{' '}
                  <a href="https://landing.autofx247.com/privacy-policy" target="_blank" rel="noopener noreferrer">
                    Chính sách quyền riêng tư
                  </a>
                </p>
              </div>
              <input type="hidden" name="form_type" value="gAAAAABlcx_oevGsWbhWZ2U9YWQOCv7h-RTJvgkv-tLu8cno0DUuNnNdIPY7x3zCLlClL3zh4KIdKg8JVNFpbfR_Zf5wKHgASA==" />
              <input type="hidden" name="campaign" value="gAAAAABlcx_odHI8tAS-VJ2x1FoX2eFkSO7UY-sqH-7UW8WeAuiNPi-72dDdjogoZRns0wYfR7S231dWl-l0SDPifQn9pR5oBQ==" />
              <input type="hidden" name="api_key" value="gAAAAABlcx_oSvOX3ASAeqRE9JxGJ4SqcgSh3bjsbeiawZ9-ikgGUudvkz5C4dvPM-na4GBLHOQHuFVFy4uwp6t6aV7FEpIsRNA5bYXIqRXtzXpztJWWlBrKvYgGj3QpoCaJOhDeZ-nA" />
              <input type="hidden" name="form_name" value="gAAAAABlcx_ozR4HKkxYEhaJ0yI9TgjZwF6FASMPcxDUO8216LCC0pcL8xe74nIuJU4w1qfNcXUpO15bEmwLi1glLKca5G2OANlV7r0pmgu_TbS8nTO7Ba0LLF7_waxr2PxlbZwQSAOq" className="form_name-field" />
            </form>
            <input type="hidden" name="error_btn-text" value="Quay lại" />
            <input type="hidden" name="error_text" value="Số điện thoại không đúng. Xin hãy nhập lại số điện thoại đúng" />
            <input type="hidden" name="successful_submit_url" value="/success" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserForm;

