export const getBackgroundCheckStatusColor = (status) => {
    if (
      status.toLowerCase() === "attested"
    ) {
      return "success";
    } else if (
      status.toLowerCase() === "paid"
    ) {
      return "warning";
    } else if (
      status.toLowerCase() === "saved"
    ) {
      return "danger";
    }
  
    return "warning";
  };