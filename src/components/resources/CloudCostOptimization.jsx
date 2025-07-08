import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Resources.css';
import { FaArrowLeft, FaCheck } from 'react-icons/fa';

const CloudCostOptimization = () => {
  const [completedItems, setCompletedItems] = useState(0);
  const [checkedItems, setCheckedItems] = useState({});
  
  // Calculate progress and savings
  const totalItems = 25;
  const progressPercentage = (completedItems / totalItems) * 100;
  const savingsEstimate = Math.min(Math.round((completedItems / totalItems) * 40), 40);
  
  // Toggle checkbox state
  const toggleCheckbox = (id) => {
    const newCheckedItems = { ...checkedItems, [id]: !checkedItems[id] };
    setCheckedItems(newCheckedItems);
    
    // Count completed items
    const completed = Object.values(newCheckedItems).filter(Boolean).length;
    setCompletedItems(completed);
  };
  
  return (
    <div className="resource-page">
      <div className="resource-container">
        <div className="resource-header">
          <Link to="/upwork-profile" className="back-link">
            <FaArrowLeft /> Back to Profile
          </Link>
          <h1>AWS Cloud Cost Optimization Checklist</h1>
        </div>
        
        <div className="intro">
          <p>This checklist provides 25 actionable steps to optimize your AWS cloud costs. By implementing these recommendations, you can potentially reduce your AWS bill by 20-40% without compromising performance or reliability.</p>
          <p>Track your progress by checking off items as you complete them. The potential savings and implementation difficulty are provided for each item to help you prioritize your optimization efforts.</p>
        </div>
        
        <div className="progress-tracker">
          <h3>Your Optimization Progress</h3>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
          </div>
          <div className="progress-text">
            <span>{completedItems}</span>
            <span>of {totalItems} items completed</span>
            <span>Est. savings: {savingsEstimate}%</span>
          </div>
        </div>
        
        <div className="category">
          <h2>Compute Optimization</h2>
          
          <div className="checklist-item">
            <div 
              className={`checkbox ${checkedItems[1] ? 'checked' : ''}`} 
              onClick={() => toggleCheckbox(1)}
            >
              {checkedItems[1] && <FaCheck className="check-icon" />}
            </div>
            <div className="checklist-item-content">
              <div className="checklist-item-title">Right-size EC2 instances</div>
              <div className="checklist-item-description">Analyze CloudWatch metrics to identify underutilized instances and downsize them to appropriate instance types. Focus on CPU, memory, and network utilization patterns.</div>
              <div className="potential-savings">Potential savings: 10-20%</div>
              <div className="implementation-difficulty easy">Easy</div>
            </div>
          </div>
          
          <div className="checklist-item">
            <div 
              className={`checkbox ${checkedItems[2] ? 'checked' : ''}`} 
              onClick={() => toggleCheckbox(2)}
            >
              {checkedItems[2] && <FaCheck className="check-icon" />}
            </div>
            <div className="checklist-item-content">
              <div className="checklist-item-title">Implement auto-scaling based on actual demand</div>
              <div className="checklist-item-description">Configure auto-scaling groups with appropriate scaling policies based on metrics like CPU utilization, request count, or custom metrics.</div>
              <div className="potential-savings">Potential savings: 15-25%</div>
              <div className="implementation-difficulty medium">Medium</div>
            </div>
          </div>
          
          <div className="checklist-item">
            <div 
              className={`checkbox ${checkedItems[3] ? 'checked' : ''}`} 
              onClick={() => toggleCheckbox(3)}
            >
              {checkedItems[3] && <FaCheck className="check-icon" />}
            </div>
            <div className="checklist-item-content">
              <div className="checklist-item-title">Use Spot Instances for non-critical workloads</div>
              <div className="checklist-item-description">Leverage Spot Instances for batch processing, testing, and development environments to take advantage of significant discounts.</div>
              <div className="potential-savings">Potential savings: 60-90% compared to On-Demand</div>
              <div className="implementation-difficulty medium">Medium</div>
            </div>
          </div>
          
          <div className="checklist-item">
            <div 
              className={`checkbox ${checkedItems[4] ? 'checked' : ''}`} 
              onClick={() => toggleCheckbox(4)}
            >
              {checkedItems[4] && <FaCheck className="check-icon" />}
            </div>
            <div className="checklist-item-content">
              <div className="checklist-item-title">Purchase Reserved Instances for predictable workloads</div>
              <div className="checklist-item-description">Identify instances with consistent usage patterns and purchase Reserved Instances with appropriate term commitments.</div>
              <div className="potential-savings">Potential savings: 40-60% compared to On-Demand</div>
              <div className="implementation-difficulty easy">Easy</div>
            </div>
          </div>
          
          <div className="checklist-item">
            <div 
              className={`checkbox ${checkedItems[5] ? 'checked' : ''}`} 
              onClick={() => toggleCheckbox(5)}
            >
              {checkedItems[5] && <FaCheck className="check-icon" />}
            </div>
            <div className="checklist-item-content">
              <div className="checklist-item-title">Consider Savings Plans for flexible compute usage</div>
              <div className="checklist-item-description">Evaluate Compute Savings Plans for workloads that may change instance families or regions over time.</div>
              <div className="potential-savings">Potential savings: 30-50% compared to On-Demand</div>
              <div className="implementation-difficulty easy">Easy</div>
            </div>
          </div>
        </div>
        
        <div className="category">
          <h2>Storage Optimization</h2>
          
          <div className="checklist-item">
            <div 
              className={`checkbox ${checkedItems[6] ? 'checked' : ''}`} 
              onClick={() => toggleCheckbox(6)}
            >
              {checkedItems[6] && <FaCheck className="check-icon" />}
            </div>
            <div className="checklist-item-content">
              <div className="checklist-item-title">Implement S3 lifecycle policies</div>
              <div className="checklist-item-description">Configure lifecycle rules to automatically transition objects to lower-cost storage classes like S3 Standard-IA, S3 One Zone-IA, or Glacier based on access patterns.</div>
              <div className="potential-savings">Potential savings: 30-70% on S3 storage</div>
              <div className="implementation-difficulty easy">Easy</div>
            </div>
          </div>
          
          <div className="checklist-item">
            <div 
              className={`checkbox ${checkedItems[7] ? 'checked' : ''}`} 
              onClick={() => toggleCheckbox(7)}
            >
              {checkedItems[7] && <FaCheck className="check-icon" />}
            </div>
            <div className="checklist-item-content">
              <div className="checklist-item-title">Delete unattached EBS volumes</div>
              <div className="checklist-item-description">Identify and remove orphaned EBS volumes that are not attached to any instances.</div>
              <div className="potential-savings">Potential savings: Variable</div>
              <div className="implementation-difficulty easy">Easy</div>
            </div>
          </div>
          
          <div className="checklist-item">
            <div 
              className={`checkbox ${checkedItems[8] ? 'checked' : ''}`} 
              onClick={() => toggleCheckbox(8)}
            >
              {checkedItems[8] && <FaCheck className="check-icon" />}
            </div>
            <div className="checklist-item-content">
              <div className="checklist-item-title">Optimize EBS volumes for cost and performance</div>
              <div className="checklist-item-description">Use the appropriate EBS volume type based on workload requirements (gp3 instead of gp2, st1 for throughput-intensive workloads).</div>
              <div className="potential-savings">Potential savings: 10-20% on EBS costs</div>
              <div className="implementation-difficulty medium">Medium</div>
            </div>
          </div>
          
          <div className="checklist-item">
            <div 
              className={`checkbox ${checkedItems[9] ? 'checked' : ''}`} 
              onClick={() => toggleCheckbox(9)}
            >
              {checkedItems[9] && <FaCheck className="check-icon" />}
            </div>
            <div className="checklist-item-content">
              <div className="checklist-item-title">Enable S3 Intelligent-Tiering</div>
              <div className="checklist-item-description">Use S3 Intelligent-Tiering for objects with unknown or changing access patterns to automatically optimize storage costs.</div>
              <div className="potential-savings">Potential savings: 15-40% on S3 storage</div>
              <div className="implementation-difficulty easy">Easy</div>
            </div>
          </div>
          
          <div className="checklist-item">
            <div 
              className={`checkbox ${checkedItems[10] ? 'checked' : ''}`} 
              onClick={() => toggleCheckbox(10)}
            >
              {checkedItems[10] && <FaCheck className="check-icon" />}
            </div>
            <div className="checklist-item-content">
              <div className="checklist-item-title">Implement automated snapshot management</div>
              <div className="checklist-item-description">Create a policy for automated snapshot creation and deletion to maintain only necessary backups.</div>
              <div className="potential-savings">Potential savings: 30-50% on snapshot storage</div>
              <div className="implementation-difficulty medium">Medium</div>
            </div>
          </div>
        </div>
        
        <div className="category">
          <h2>Database Optimization</h2>
          
          <div className="checklist-item">
            <div 
              className={`checkbox ${checkedItems[11] ? 'checked' : ''}`} 
              onClick={() => toggleCheckbox(11)}
            >
              {checkedItems[11] && <FaCheck className="check-icon" />}
            </div>
            <div className="checklist-item-content">
              <div className="checklist-item-title">Right-size RDS instances</div>
              <div className="checklist-item-description">Analyze CloudWatch metrics to identify underutilized RDS instances and resize them appropriately.</div>
              <div className="potential-savings">Potential savings: 20-30% on RDS costs</div>
              <div className="implementation-difficulty medium">Medium</div>
            </div>
          </div>
          
          <div className="checklist-item">
            <div 
              className={`checkbox ${checkedItems[12] ? 'checked' : ''}`} 
              onClick={() => toggleCheckbox(12)}
            >
              {checkedItems[12] && <FaCheck className="check-icon" />}
            </div>
            <div className="checklist-item-content">
              <div className="checklist-item-title">Purchase Reserved Instances for RDS</div>
              <div className="checklist-item-description">For databases with predictable usage, purchase RDS Reserved Instances to reduce costs.</div>
              <div className="potential-savings">Potential savings: 30-60% compared to On-Demand</div>
              <div className="implementation-difficulty easy">Easy</div>
            </div>
          </div>
          
          <div className="checklist-item">
            <div 
              className={`checkbox ${checkedItems[13] ? 'checked' : ''}`} 
              onClick={() => toggleCheckbox(13)}
            >
              {checkedItems[13] && <FaCheck className="check-icon" />}
            </div>
            <div className="checklist-item-content">
              <div className="checklist-item-title">Use Aurora Serverless for variable workloads</div>
              <div className="checklist-item-description">Consider Aurora Serverless for applications with variable or unpredictable database usage patterns.</div>
              <div className="potential-savings">Potential savings: 30-50% for variable workloads</div>
              <div className="implementation-difficulty hard">Hard</div>
            </div>
          </div>
          
          <div className="checklist-item">
            <div 
              className={`checkbox ${checkedItems[14] ? 'checked' : ''}`} 
              onClick={() => toggleCheckbox(14)}
            >
              {checkedItems[14] && <FaCheck className="check-icon" />}
            </div>
            <div className="checklist-item-content">
              <div className="checklist-item-title">Optimize DynamoDB provisioned capacity</div>
              <div className="checklist-item-description">Use DynamoDB auto-scaling or on-demand pricing mode to match capacity with actual usage patterns.</div>
              <div className="potential-savings">Potential savings: 15-40% on DynamoDB costs</div>
              <div className="implementation-difficulty medium">Medium</div>
            </div>
          </div>
          
          <div className="checklist-item">
            <div 
              className={`checkbox ${checkedItems[15] ? 'checked' : ''}`} 
              onClick={() => toggleCheckbox(15)}
            >
              {checkedItems[15] && <FaCheck className="check-icon" />}
            </div>
            <div className="checklist-item-content">
              <div className="checklist-item-title">Implement RDS storage auto-scaling</div>
              <div className="checklist-item-description">Enable storage auto-scaling for RDS instances to avoid over-provisioning storage upfront.</div>
              <div className="potential-savings">Potential savings: 10-20% on RDS storage costs</div>
              <div className="implementation-difficulty easy">Easy</div>
            </div>
          </div>
        </div>
        
        <div className="category">
          <h2>Networking Optimization</h2>
          
          <div className="checklist-item">
            <div 
              className={`checkbox ${checkedItems[16] ? 'checked' : ''}`} 
              onClick={() => toggleCheckbox(16)}
            >
              {checkedItems[16] && <FaCheck className="check-icon" />}
            </div>
            <div className="checklist-item-content">
              <div className="checklist-item-title">Use VPC endpoints for AWS services</div>
              <div className="checklist-item-description">Implement VPC endpoints to reduce NAT gateway and data transfer costs when accessing AWS services.</div>
              <div className="potential-savings">Potential savings: 30-50% on data transfer costs</div>
              <div className="implementation-difficulty medium">Medium</div>
            </div>
          </div>
          
          <div className="checklist-item">
            <div 
              className={`checkbox ${checkedItems[17] ? 'checked' : ''}`} 
              onClick={() => toggleCheckbox(17)}
            >
              {checkedItems[17] && <FaCheck className="check-icon" />}
            </div>
            <div className="checklist-item-content">
              <div className="checklist-item-title">Optimize NAT gateway usage</div>
              <div className="checklist-item-description">Consolidate NAT gateways where possible and ensure they're only used when necessary.</div>
              <div className="potential-savings">Potential savings: 20-40% on NAT gateway costs</div>
              <div className="implementation-difficulty medium">Medium</div>
            </div>
          </div>
          
          <div className="checklist-item">
            <div 
              className={`checkbox ${checkedItems[18] ? 'checked' : ''}`} 
              onClick={() => toggleCheckbox(18)}
            >
              {checkedItems[18] && <FaCheck className="check-icon" />}
            </div>
            <div className="checklist-item-content">
              <div className="checklist-item-title">Use CloudFront to reduce data transfer costs</div>
              <div className="checklist-item-description">Implement CloudFront for content delivery to reduce data transfer costs and improve performance.</div>
              <div className="potential-savings">Potential savings: 40-60% on data transfer costs</div>
              <div className="implementation-difficulty medium">Medium</div>
            </div>
          </div>
          
          <div className="checklist-item">
            <div 
              className={`checkbox ${checkedItems[19] ? 'checked' : ''}`} 
              onClick={() => toggleCheckbox(19)}
            >
              {checkedItems[19] && <FaCheck className="check-icon" />}
            </div>
            <div className="checklist-item-content">
              <div className="checklist-item-title">Optimize Elastic IP usage</div>
              <div className="checklist-item-description">Release unused Elastic IPs as they incur charges when not associated with running instances.</div>
              <div className="potential-savings">Potential savings: Variable</div>
              <div className="implementation-difficulty easy">Easy</div>
            </div>
          </div>
          
          <div className="checklist-item">
            <div 
              className={`checkbox ${checkedItems[20] ? 'checked' : ''}`} 
              onClick={() => toggleCheckbox(20)}
            >
              {checkedItems[20] && <FaCheck className="check-icon" />}
            </div>
            <div className="checklist-item-content">
              <div className="checklist-item-title">Use AWS Transit Gateway for network consolidation</div>
              <div className="checklist-item-description">Implement Transit Gateway to simplify network architecture and reduce VPN connection costs.</div>
              <div className="potential-savings">Potential savings: 15-30% on networking costs</div>
              <div className="implementation-difficulty hard">Hard</div>
            </div>
          </div>
        </div>
        
        <div className="category">
          <h2>General Optimization</h2>
          
          <div className="checklist-item">
            <div 
              className={`checkbox ${checkedItems[21] ? 'checked' : ''}`} 
              onClick={() => toggleCheckbox(21)}
            >
              {checkedItems[21] && <FaCheck className="check-icon" />}
            </div>
            <div className="checklist-item-content">
              <div className="checklist-item-title">Implement resource tagging strategy</div>
              <div className="checklist-item-description">Tag all resources with appropriate metadata (owner, project, environment) to track and allocate costs accurately.</div>
              <div className="potential-savings">Potential savings: Indirect through better cost allocation</div>
              <div className="implementation-difficulty medium">Medium</div>
            </div>
          </div>
          
          <div className="checklist-item">
            <div 
              className={`checkbox ${checkedItems[22] ? 'checked' : ''}`} 
              onClick={() => toggleCheckbox(22)}
            >
              {checkedItems[22] && <FaCheck className="check-icon" />}
            </div>
            <div className="checklist-item-content">
              <div className="checklist-item-title">Set up AWS Budgets and alerts</div>
              <div className="checklist-item-description">Configure AWS Budgets to monitor spending and receive alerts when costs exceed thresholds.</div>
              <div className="potential-savings">Potential savings: Indirect through better cost control</div>
              <div className="implementation-difficulty easy">Easy</div>
            </div>
          </div>
          
          <div className="checklist-item">
            <div 
              className={`checkbox ${checkedItems[23] ? 'checked' : ''}`} 
              onClick={() => toggleCheckbox(23)}
            >
              {checkedItems[23] && <FaCheck className="check-icon" />}
            </div>
            <div className="checklist-item-content">
              <div className="checklist-item-title">Use AWS Cost Explorer for regular cost analysis</div>
              <div className="checklist-item-description">Regularly review AWS Cost Explorer reports to identify cost trends and optimization opportunities.</div>
              <div className="potential-savings">Potential savings: Indirect through informed decision-making</div>
              <div className="implementation-difficulty easy">Easy</div>
            </div>
          </div>
          
          <div className="checklist-item">
            <div 
              className={`checkbox ${checkedItems[24] ? 'checked' : ''}`} 
              onClick={() => toggleCheckbox(24)}
            >
              {checkedItems[24] && <FaCheck className="check-icon" />}
            </div>
            <div className="checklist-item-content">
              <div className="checklist-item-title">Implement automated resource scheduling</div>
              <div className="checklist-item-description">Use AWS Instance Scheduler or custom scripts to automatically start and stop non-production resources during off-hours.</div>
              <div className="potential-savings">Potential savings: 40-70% on non-production resources</div>
              <div className="implementation-difficulty medium">Medium</div>
            </div>
          </div>
          
          <div className="checklist-item">
            <div 
              className={`checkbox ${checkedItems[25] ? 'checked' : ''}`} 
              onClick={() => toggleCheckbox(25)}
            >
              {checkedItems[25] && <FaCheck className="check-icon" />}
            </div>
            <div className="checklist-item-content">
              <div className="checklist-item-title">Review and delete unused resources</div>
              <div className="checklist-item-description">Regularly audit and remove unused resources like idle load balancers, unused AMIs, and orphaned snapshots.</div>
              <div className="potential-savings">Potential savings: 5-15% of overall costs</div>
              <div className="implementation-difficulty easy">Easy</div>
            </div>
          </div>
        </div>
        
        <div className="resource-footer">
          <p>This checklist is provided as a guide to help you optimize your AWS cloud costs. The potential savings are estimates and may vary based on your specific environment and usage patterns.</p>
          <div className="contact">
            <p>Need help implementing these cost optimization strategies? <a href="mailto:nabntan@gmail.com">Contact me</a> for professional DevOps services.</p>
          </div>
          <p>&copy; 2025 Nabeel Sarfraz. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default CloudCostOptimization;
