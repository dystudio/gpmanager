<%@ page language="java" import="com.txdb.gpmanage.charts.dataproviders.*" contentType="text/html; charset=ISO-8859-1" pageEncoding="UTF-8"%>
<html>

<head>
    <title>Cluster Usage Load</title>
    <script type="text/javascript" src="../../js/fusioncharts.js"></script>
    <script type="text/javascript" src="../../js/themes/fusioncharts.theme.ocean.js"></script>
    <script type="text/javascript">
        <%
    		String monitorName = request.getParameter("monitorName");
    		SystemDataProvider dataProvider = SystemDataProvider.getInstance(monitorName);
    	%>
        <%=dataProvider.getChartBody_clusterUsageLoad()%>
    </script>
</head>

<body>
    <div id="chart-container5">Cluster Usage Load</div>
</body>

</html>