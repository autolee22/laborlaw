document.addEventListener("DOMContentLoaded", function () {

    const modalHtml = `
    <div class="modal fade" id="consultModal" tabindex="-1">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">

          <div class="modal-header modal-title-area">
            <h5 class="modal-title">상담 신청하기</h5>
            <button
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              type="button">
            </button>
          </div>

          <div class="modal-body">
            <form id="consultForm">

              <div class="row g-3">

                <div class="col-md-6">
                  <label class="form-label">성명</label>
                  <input
                    class="form-control"
                    id="userName"
                    placeholder="성명을 입력하세요"
                    type="text">
                </div>

                <div class="col-md-6">
                  <label class="form-label">연락처</label>
                  <input
                    class="form-control"
                    id="userPhone"
                    placeholder="010-0000-0000"
                    type="text">
                </div>

                <div class="col-12">
                  <label class="form-label">상담 분야</label>
                  <select class="form-select" id="consultType">
                    <option value="">상담 분야를 선택하세요</option>
                    <option>인사노무법률자문</option>
                    <option>급여관리</option>
                    <option>부당해고 대응</option>
                    <option>임금체불 사건</option>
                    <option>노동위원회 사건 대리</option>
                    <option>노동부 진정 등 사건 대리</option>
                    <option>단체교섭 지원 및 대리</option>
                    <option>체당금</option>
                    <option>기타</option>
                  </select>
                </div>

                <div class="col-12">
                  <label class="form-label">상담 내용</label>
                  <textarea
                    class="form-control"
                    id="consultContent"
                    rows="6"
                    placeholder="상담 내용을 입력하세요">
                  </textarea>
                </div>

              </div>

              <div class="form-check mt-3">
                <input
                  class="form-check-input"
                  id="privacyAgree"
                  type="checkbox">

                <label
                  class="form-check-label"
                  for="privacyAgree">
                  개인정보 수집 및 이용에 동의합니다.
                </label>
              </div>

            </form>
          </div>

          <div class="modal-footer">
            <button
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              type="button">
              닫기
            </button>

            <button
              class="btn btn-primary"
              id="btnConsultSubmit"
              type="button">
              상담 신청
            </button>
          </div>

        </div>
      </div>
    </div>
    `;

    document.getElementById("commonModal").innerHTML = modalHtml;
});