package com.txdb.gpmanage.core.exception;

/**
 * 界面对应的枚举
 * 
 * @author ws
 */
public enum CompositeCode {

	HOSTMANAGE, CONFIGURE, INSTALL_MASTER, INSTALL_SEGMENT, SSH, SYSTEM_CHECK, INIT_FILE, RUN_INSTALL, EVN_VARIABLE, EXTEND, REDISTRIBUTION, DENPENDENCY_SOFT, BREAKEDIWN, ADDSTANDBY, ADDMIRROR, AUTHORITYMANAGE, PARAM_MANAGE,

	CONNICTMANGE, USERMANAGE, POLICY,

	AUDIT_CONDITION, AUDIT_LOG,

	MONITOR_DASHBOARD_HEALTH_DISK, MONITOR_DASHBOARD_LOG, MONITOR_DASHBOARD_LOG_HISTORY,

	MONITOR_QUERY_LIST_DETAILS,

	MONITOR_HOST_CPU, MONITOR_HOST_MEMORY, MONITOR_HOST_SKEW,

	MONITOR_CLUSTER_QUERIES, MONITOR_CLUSTER_SYSTEM,

	MONITOR_HISTORY_QUERIES, MONITOR_HISTORY_SYSTEM, MONITOR_HISTORY_QUERIES_LIST,

	MONITOR_SYSTEM_SEGMENT, MONITOR_SYSTEM_STORAGE, MONITOR_SYSTEM_WARNING
}
