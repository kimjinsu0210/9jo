$(document).ready(function () {
  //이미지 변경
  $(".img_change1").hover(
    function () {
      $("#img1").attr("src", "/static/img/KSH2.gif");
    },
    function () {
      $("#img1").attr("src", "/static/img/KSH.png");
    }
  );
  $(".img_change2").hover(
    function () {
      $("#img2").attr("src", "/static/img/JIJ2.gif");
    },
    function () {
      $("#img2").attr("src", "/static/img/JIJ.png");
    }
  );
  $(".img_change3").hover(
    function () {
      $("#img3").attr("src", "/static/img/KJS2.gif");
    },
    function () {
      $("#img3").attr("src", "/static/img/KJS.png");
    }
  );
  $(".img_change4").hover(
    function () {
      $("#img4").attr("src", "/static/img/YSM2.gif");
    },
    function () {
      $("#img4").attr("src", "/static/img/YSM.png");
    }
  );
  $(".img_change5").hover(
    function () {
      $("#img5").attr("src", "/static/img/AHM2.gif");
    },
    function () {
      $("#img5").attr("src", "/static/img/AHM.png");
    }
  );

  // 팀원 list
  const searchParams = new URLSearchParams(location.search);
  let name = searchParams.get("name");
  let formData = new FormData();
  formData.append("name", name);
  fetch("/information", { method: "POST", body: formData })
    .then((response) => response.json())
    .then((data) => {
      let a = data["result"];
      $(".content").empty();
      let name = a["name"];
      let mbti = a["mbti"];
      let hobby = a["hobby"];
      let merit = a["merit"];
      let style = a["style"];
      let blog = a["blog"];
      let signature = a["signature"];
      let goal = a["goal"];
      let promise = a["promise"];
      let comment = a["comment"];
      let imageURL = "";
      if (name == "김진수") {
        imageURL = "/static/img/KJS.png";
      } else if (name == "김성훈") {
        imageURL = "/static/img/KSH.png";
      } else if (name == "조인재") {
        imageURL = "/static/img/JIJ.png";
      } else if (name == "윤수민") {
        imageURL = "/static/img/YSM.png";
      } else if (name == "안홍민") {
        imageURL = "/static/img/AHM.png";
      }
      let temp_html = `<div>
                        <img class="main-imoji" src="${imageURL}">
                        <textarea class="comment" id="comment" name="comment">${comment}</textarea>
                      </div>
                      <div class="controls">
                          <p>
                          <label for="name">이름</label><br>
                          <input class="tbox" type="text" id="name" name="name" value="${name}"readonly />
                      </p>
                      <p>
                          <label for="mbti">MBTI</label><br>
                          <input class="tbox" type="text" id="mbti" name="mbti" value="${mbti}"readonly />
                      </p>
                      <p>
                          <label for="hobby">취미</label><br>
                          <input class="tbox" type="text" id="hobby" name="hobby" value="${hobby}"readonly />
                      </p>
                      <p>
                          <label for="merit">장점</label><br>    
                          <input class="tbox" type="text" id="merit" name="merit" value="${merit}"readonly />
                      </p>
                      <p>
                          <label for="style">협업 스타일</label><br>
                          <input class="tbox" type="text" id="style" name="style" value="${style}"readonly />
                      </p>
                      <p>
                          <label for="blog">블로그 주소 -></label><a href="${blog}"> 이동</a><br>
                          <input class="tbox" type="text" id="blog" name="blog" value="${blog}"readonly />
                      </p>
                      <p>
                          <label for="blog">팀 특징</label>
                          <input class="tbox" type="text" id="signature" name="signature" value="${signature}"/>
                      </p>
                      <p>
                          <label for="blog">팀 목표</label>
                          <input class="tbox" type="text" id="goal" name="goal" value="${goal}"/>
                      </p>
                      <p>
                          <label for="blog">팀 약속</label>
                          <input class="tbox" type="text" id="promise" name="promise" value="${promise}"/>
                      </p>
                      </div>`;
      $(".content").append(temp_html);
    });
});

// 팀원 정보 띄워주기
function content_modify() {
  $(".modify_complete").empty();
  let name = $("#name").val();
  let mbti = $("#mbti").val();
  let hobby = $("#hobby").val();
  let merit = $("#merit").val();
  let style = $("#style").val();
  let blog = $("#blog").val();
  let signature = $("#signature").val();
  let goal = $("#goal").val();
  let promise = $("#promise").val();
  let comment = $("#comment").val();

  $(".controls").empty();
  let temp_html = `<textarea class="comment" id="comment" name="comment">${comment}</textarea>
                    <div class="controls">
                        <p>
                        <label for="name">이름</label><br>
                        <input class="input_tag" type="text" id="name" name="name" value="${name}" readonly/>
                    </p>
                    <p>
                        <label for="mbti">MBTI</label><br>
                        <input class="input_tag" type="text" id="mbti" name="mbti" value="${mbti}"/>
                    </p>
                    <p>
                        <label for="hobby">취미</label><br>
                        <input class="input_tag" type="text" id="hobby" name="hobby" value="${hobby}" />
                    </p>
                    <p>
                        <label for="merit">장점</label><br>
                        <input class="input_tag" type="text" id="merit" name="merit" value="${merit}" />
                    </p>
                    <p>
                        <label for="style">협업 스타일</label><br>
                        <input class="input_tag" type="text" id="style" name="style" value="${style}" />
                    </p>
                    <p>
                        <label for="blog">블로그 주소</label><br>
                        <input class="input_tag" type="text" id="blog" name="blog" value="${blog}"/>
                    </p>
                    <p>
                        <label for="blog">팀 특징</label><br>
                        <input class="input_tag" type="text" id="signature" name="signature" value="${signature}"/>
                    </p>
                    <p>
                        <label for="blog">팀 목표</label><br>
                        <input class="input_tag" type="text" id="goal" name="goal" value="${goal}"/>
                    </p>
                    <p>
                        <label for="blog">팀 약속</label><br>
                        <input class="input_tag" type="text" id="promise" name="promise" value="${promise}"/>
                    </p>
                    </div>
                    <br>
                    <div class="update">
                    <input type="button" onclick="complete_modify()" id="btn" class="change-btn2" value="수정완료">
                    <div>
                    `;
  $(".controls").append(temp_html);
}

// 정보 수정하기
function complete_modify() {
  $(".update").empty();
  let name = $("#name").val();
  let mbti = $("#mbti").val();
  let hobby = $("#hobby").val();
  let merit = $("#merit").val();
  let style = $("#style").val();
  let blog = $("#blog").val();
  let signature = $("#signature").val();
  let goal = $("#goal").val();
  let promise = $("#promise").val();
  let comment = $("#comment").val();
  let formData = new FormData();
  formData.append("name", name);
  formData.append("mbti", mbti);
  formData.append("hobby", hobby);
  formData.append("merit", merit);
  formData.append("style", style);
  formData.append("blog", blog);
  formData.append("signature", signature);
  formData.append("goal", goal);
  formData.append("promise", promise);
  formData.append("comment", comment);
  fetch("/modify", { method: "POST", body: formData })
    .then((response) => response.json())
    .then((data) => {
      window.location.reload();
    });
}
