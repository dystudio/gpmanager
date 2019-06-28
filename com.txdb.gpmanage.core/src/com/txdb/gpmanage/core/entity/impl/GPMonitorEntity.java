package com.txdb.gpmanage.core.entity.impl;

import java.util.List;

import com.txdb.gpmanage.core.entity.BaseGPEntity;
import com.txdb.gpmanage.core.entity.annotation.FieldTag;
import com.txdb.gpmanage.core.entity.annotation.NoToDbTag;
import com.txdb.gpmanage.core.entity.annotation.TableTag;

/**
 * GP Monitor配置
 * @author xiaom
 */
@TableTag(tableName = "gpmonitor")
public class GPMonitorEntity extends BaseGPEntity {

	@FieldTag(constraint = "PRIMARY KEY")
	private String monitorName;
	private String hostname;

	private int sshPort;
	private String gpUsername;
	private String gpUserpwd;
	
	@NoToDbTag
	private List<SystemWarningEntity> warns;
	private int gpPort;
	private String dbUsername;
	private String dbUserpwd;
	private String gpmonPwd = "123456";

	public String getMonitorName() {
		return monitorName;
	}

	public void setMonitorName(String monitorName) {
		this.monitorName = monitorName;
	}

	public String getHostname() {
		return hostname;
	}

	public void setHostname(String hostname) {
		this.hostname = hostname;
	}

	public int getSshPort() {
		return sshPort;
	}

	public void setSshPort(int sshPort) {
		this.sshPort = sshPort;
	}

	public String getGpUsername() {
		return gpUsername;
	}

	public void setGpUsername(String gpUsername) {
		this.gpUsername = gpUsername;
	}

	public String getGpUserpwd() {
		return gpUserpwd;
	}

	public void setGpUserpwd(String gpUserpwd) {
		this.gpUserpwd = gpUserpwd;
	}

	public int getGpPort() {
		return gpPort;
	}

	public void setGpPort(int gpPort) {
		this.gpPort = gpPort;
	}

	public String getDbUsername() {
		return dbUsername;
	}

	public void setDbUsername(String dbUsername) {
		this.dbUsername = dbUsername;
	}

	public String getDbUserpwd() {
		return dbUserpwd;
	}

	public void setDbUserpwd(String dbUserpwd) {
		this.dbUserpwd = dbUserpwd;
	}

	public String getGpmonPwd() {
		return gpmonPwd;
	}

	public void setGpmonPwd(String gpmonPwd) {
		this.gpmonPwd = gpmonPwd;
	}

	public List<SystemWarningEntity> getWarns() {
		return warns;
	}

	public void setWarns(List<SystemWarningEntity> warns) {
		this.warns = warns;
	}
}
