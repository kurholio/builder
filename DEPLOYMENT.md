# Deployment Troubleshooting Guide

## Common Issues When Site Doesn't Update

### 1. **CloudFront Caching Issues**
- **Problem**: CloudFront serves old cached content
- **Solution**: Check CloudFront invalidation status in AWS Console
- **Wait Time**: 5-10 minutes for invalidation to complete

### 2. **Browser Caching**
- **Problem**: Browser caches old assets
- **Solutions**:
  - Hard refresh: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
  - Clear browser cache and cookies
  - Use incognito/private browsing mode
  - Check browser dev tools → Network tab → Disable cache

### 3. **S3 Object Versioning**
- **Problem**: If enabled, old versions might be served
- **Solution**: Check S3 bucket versioning settings
- **Fix**: Disable versioning or ensure latest version is set as current

### 4. **Build Hash Mismatch**
- **Problem**: Old HTML references old asset files
- **Solution**: Ensure clean build and proper asset hashing
- **Check**: Verify `build/assets/` contains new hashed files

## Quick Fixes

### Run These Commands:
```bash
# Clean and rebuild
npm run deploy:clean
npm run deploy:build

# Verify build output
npm run deploy:verify

# Check if deployment script ran successfully
git log --oneline -5
```

### Manual Cache Clearing:
1. **Browser**: Hard refresh + clear cache
2. **CloudFront**: Check invalidation status in AWS Console
3. **S3**: Verify latest files are uploaded
4. **Wait**: 5-10 minutes for propagation

## Deployment Checklist

- [ ] Code committed and pushed to main branch
- [ ] GitHub Actions deployment completed successfully
- [ ] Build artifacts generated in `build/` directory
- [ ] S3 sync completed without errors
- [ ] CloudFront invalidation completed
- [ ] Cache control headers set correctly
- [ ] Post-deployment verification passed

## AWS Console Checks

### CloudFront:
- Go to CloudFront → Distributions
- Check invalidation status
- Verify distribution is enabled

### S3:
- Check bucket contents match `build/` directory
- Verify `index.html` and `assets/` are present
- Check object metadata for cache control

### IAM:
- Ensure deployment user has proper permissions
- Check for any access denied errors in deployment logs

## Still Having Issues?

1. **Check GitHub Actions logs** for deployment errors
2. **Verify AWS credentials** and permissions
3. **Check CloudFront distribution settings** for caching behavior
4. **Review S3 bucket policy** for public access
5. **Contact AWS support** if CloudFront issues persist

## Emergency Rollback

If deployment causes issues:
1. Revert to previous commit
2. Re-run deployment
3. Check CloudFront invalidation status
4. Wait for propagation to complete
