<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding = "UTF8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <%
        String id = request.getParameter("id");
        String first_name = request.getParameter("first_name");
        String last_name = request.getParameter("last_name");
        String email = request.getParameter("email");
        String gender = request.getParameter("gender");
    %>
    <a href="jason.html">back</a>
    <div style="background-color: azure; border: 1px dotted red;">
        <전송된 정보>
        <form action="jsonUpdate.jsp" method="post">
            아이디:<input type="text" name="id" value="<%=id%>">
            이름:<input type="text" name="first_name" value="<%=first_name%>">
            성:<input type="text" name="last_name" value="<%=last_name%>">
            이메일:<input type="text" name="email" value="<%=email%>">
            성별:<input type="text" name="gender" value="<%=gender%>">
            <input type="submit" value="전송">
            <input type="submit" value="취소">
        </form>
    </div>
</body>
</html>
