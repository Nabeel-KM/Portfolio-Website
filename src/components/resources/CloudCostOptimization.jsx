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
        
        {/* Additional categories would be added here */}
        
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
