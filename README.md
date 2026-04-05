# DevOps / Cloud Engineer Practical Evaluation Assignment

**Candidate:**   Kefas Etiku Francis

**Project Goal:** End-to-end deployment, automation, and monitoring of a luxury restaurant application.


## 🚀 Project Overview

This repository demonstrates a full-stack DevOps lifecycle, moving from static AWS hosting to a containerized Linux environment with automated deployment scripts.

-----

## 📂 Phase 1: AWS Static Website Deployment (20 Marks)

**Objective:** Host a secure, high-availability static website using AWS managed services.

### Technical Execution:

  * **Storage:** Created an **S3 bucket** with static website hosting enabled.
  * **Security:** Configured **IAM roles** with least-privilege access for management
  * **Content Delivery:** Deployed a **CloudFront distribution** to serve content globally, ensuring low latency and S3 bucket privacy.
  * **Policy:** Implemented a bucket policy to restrict access solely to the CloudFront Origin Access Control (OAC).

-----

## 🐳 Phase 2: Dockerized App Deployment on Linux 

**Objective:** Deploy a web application in a production-style Linux environment using Docker.

### Technical Execution:

  * **Infrastructure:** Provisioned an **AWS EC2 Ubuntu server** and established secure SSH access.
  * **Tooling:** Installed and configured **Git, Docker, and Nginx**.
  * **Containerization:** Authored a custom `Dockerfile` using `nginx:alpine` to bundle the application
  * **Reverse Proxy:** Configured **Nginx** as a reverse proxy to route traffic to the Docker container.

-----

## ⚙️ Phase 3: Production Operations & Automation 

**Objective:** Demonstrate uptime reliability, monitoring, and an automation-first mindset.

### Technical Execution:

  * **Automation:** Created a `deploy.sh` shell script to automate the "Build-Stop-Run" lifecycle, ensuring consistent updates.
  * **Monitoring:** Implemented resource tracking using `docker stats` and log analysis to maintain system health.
  * **Reliability:** Configured the Docker `--restart always` policy to ensure the application automatically recovers from crashes or server reboots.

-----

## ⚠️ Troubleshooting & Issues Resolved

A key part of this evaluation was resolving real-world blockers:

1.  **Port 80 Conflict:** Encountered an "Address already in use" error when the host Nginx service blocked the Docker container. Resolved by stopping the host service to allow the containerized app to bind to Port 80.
2.  **Build Context Path:** Identified a `Dockerfile` path error when running scripts from the root directory.
3.  Resolved by moving the automation script into the `my-app/` directory to ensure proper build context
-----

## 🛠️ Operational Commands

  * **Deploy Update:** `./deploy.sh`
  * **Check Resource Usage:** `sudo docker stats`
  * **View Application Logs:** `sudo docker logs restaurant-app`
