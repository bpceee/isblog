import React from 'react';

const PostDate = ({dateString, ...elemProps}) => {
  const splits = new Date(dateString).toString().substring(4, 15).split(' ');
  splits.unshift(splits.splice(1, 1))
  const transformedDataString = splits.join(' ');
  return <span {...elemProps}>{transformedDataString}</span>
}

  export default PostDate;