/**
 * Get the value of a query parameter from a URL search string.
 * @param {string} windowLocationSearch
 * @param {string} parameterName
 * @returns {string | null}
 */
function getQueryParamOrNull(windowLocationSearch, parameterName) {
  return (
    windowLocationSearch
      ?.substring(1) // Remove the leading '?'
      .split("&") // Split into key-value pairs
      .find((param) => param.startsWith(`${parameterName}=`)) // Find the key-value pair with the parameterName
      ?.split("=")[1] || null // Get the value part of the key-value pair
  );
}

if (typeof module !== "undefined") {
  module.exports = {
    getQueryParamOrNull,
  };
}
