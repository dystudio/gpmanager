<%@ page language="java" import="com.txdb.gpmanage.charts.dataproviders.*" contentType="text/html; charset=ISO-8859-1" pageEncoding="UTF-8"%>
<html>

<head>
    <title>History Segments Usage Diskspace</title>
    <script type="text/javascript" src="../../js/fusioncharts.js"></script>
    <script type="text/javascript">
    	<%
    		String monitorName = request.getParameter("monitorName");
    		DiskspaceDataProvider dataProvider = DiskspaceDataProvider.getInstance(monitorName);
    	%>
        <%=dataProvider.getChartBody_diskspace_segments_history()%>
    </script>
</head>

<body>
    <div id="chart-container">History Segments Usage Diskspace</div>
</body>

</html>