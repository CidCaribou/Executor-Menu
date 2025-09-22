// ==UserScript==
// @name         Executor
// @namespace    https://executor-official.netlify.app/
// @version      2.0.0
// @description  Easy script launcher with categories, search, and quick access.
// @author       Wasd
// @match        *://*/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAIABJREFUeAHtnVuMnEd6nme9dhwEiC8D5CpILm0gAawgXmkDSUAujNgIECQQEPjKF7GB1ZAr67ArzYkcksPhcUWJ5xlK1IGkRDXF3XXWki2v1nuQyHXgXMUXSYDkJkaAGIkodk+fZkbOH9RQTc5w+vAfquqvt+oRUJhh9/9XffV871ff2z09o6kp/oMABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIREeg0ci++snl/j+6vbr5xKeXvvit2ytfPMWAARpIUwN/fnH9V6M75NgQBCDwgMCnlza+dmtl8/DtS5u3b69u9m+vbmYMGKABNHB7dbNpzocHpwXfQQAC8gT+00r2d36+urH39srmf+Wg56BHA2hgjAYwAfInPhuAwNTUVLaY/cKt1Y3fu726+ddjCp53AHgXBA2gge0awATQQSCgTOA/Xur9w9urm7do/LzaQwNooIQGMAHKDYDY0yVwa+WL3761uvn5rdXNjAEDNIAGSmoAE5BuG2HnigRurW787q3Vzc2SBY9hwDShATSwXQOYAMVGQMzpEbi98sXv3FrZ/JtbK5sZAwZoAA1Y0gAmIL12wo6VCHxyYfPJWyubG5YKHgOBiUIDaGC7BjABSg2BWNMhcOtC9vdurWz+L5o/r/jQABpwqAFMQDpthZ2qEPh0ZfPmpyubGQMGaAANONYAJkClMRBn/AQ+Xf3iXzoueIwF5goNoIHtGsAExN9a2KECgU9XNv8CA8CrPjSABjxrABOg0CCIMV4Ct1c3f9Nz0W9/FcD3vCpEA2lrABMQb3thZ6ET+GR18wYGgFd+aAAN1KgBTEDojYL44iPw56ezX/l0ZbNXY+Hz6i/tV3/kn/wPNIAJiK/FsKOQCXxy8Yt/9cnFzYwBAzSABgLQQPPT8/yvhEPuGcQWEYGfXdw8EUDRY0AwYWgADQw0gAmIqMewlYAJfHJx848xALzyQwNoIDANYAIC7huEFgmBTy5+8d8DK/zBqwC+8ooQDaStAUxAJH2GbQRK4JOLm59jAHj1hwbQQKAaaP/04ubjgR6fhAUBbQI/u7ix+bOLGxkDBmgADQSqAd4J0G4zRB8qgUALHkOCKUMDaGC7BngnINQmQly6BDAAvOpDA2hARAOYAN1WQ+QhEhAp/O2vBPieV4ZoIF0NYAJCbCTEpEngZxc2MgYM0AAakNHA+Q1MgGa7IerQCMgUPUYFo4YG0MBAA5iA0FoJ8SgS+OmFjYwBAzSABuQ0gAlQbDnEHBIBuaLHsGDY0AAaGGgAExBSOyEWNQIYAF75oQE0IK0BTIBa2yHeUAhIF/7gVQBfeUWIBtLWACYglJZCHEoEMAC8+kMDaCAKDWAClFoPsYZA4CcXNjIGDNAAGohCA5iAENoKMagQiKLoMTGYODSABgYawASotB/irJvAT85vZAwYoAE0EJkG2j89y/9FsO7+wvqBE4is6DEzGDo0gAYGGsAEBN5/CK9mAhgAXvmhATQQsQYwATX3GJYPmEDEhT94FcBXXhGigbQ1gAkIuAcRWo0Efnx+I2PAAA2ggcg10P4RnwmosdOwdJAEIi96zA0GDw2ggYEGMAFBdiGCqo0ABoBXfmgADSSkAUxAbd2GhYMjkFDhD14F8JVXhGggbQ1gAoLrRARUCwEMAK/+0AAaSFADmIBaOg6LBkXgz85tZCLj5z86v/4UAwZowJ4GRGrf1RnV/Pjs5qNBHcgEAwGfBFQOgB+f22z45MJaEEiBgEr9O4yTdwJSEDp7HE7AYWFZde0YgOH541EIVCGgUv+O48QEVBER9+oScFxY1kwABkBXY0QeLgGV+vcQJyYgXJkSmSsCHgrLignAALhSAPOmTECl/j3FiQlIuRhS3LunwqpsAjAAKaqTPbsmoFL/HuPEBLgWHfOHQ+BH5zYyjcGHAMNRDZHEQkCj9r2fUZiAWATOPsYT0DkAMADjM8mzEChOQKf+MQHFs8sdEJhAQOcAwABMSCVPQ6AwAZ36924AzDujvBNQWFHcIEXgR2c3MonB3wGQ0hXBahCQqP16zyhMgIaUibIMAZkDAANQJr3cA4GxBGTqHxMwNo88CYFSBD4+u5FJDAxAqfxyEwTGEZCo/TDOKN4JGCckntMkIHMAYAA0BUbUQROQqX9MQNA6IjhRAjIHAAZAVGGEHTIBmfoPwwCYd0t5JyBkQRNbMQIyBwAGoFhiuRoCOQjI1H84BgATkENXXCJCQOYAwACIKIowlQjI1H9YBgAToCRyYh1NQOYAwACMTiLPQKAkAZn6D88AYAJKao7bAiLww7MbmcL4GAMQkGoIJRYCCrUfeIztj85uPh6LHthHYgR+eGYjUxgfn+EvASYmTbbrgYBC7QvEiAnwoFWWcEDgh2fWM4Xx8Zn1hoPtMyUEkiagUPsiMWICkq4k0c2LFFeGARAVGGEHTUCl/kXixAQErXaC20VApLAwALsyxwMQqE5Apf6F4sQEVJclM/gi8Kdn1jORwY8AfImCdZIhIFL7KmfUIE5MQDIVJL5RoQMAAyCuNcIPj4BQ/Q+aq8pXTEB4cieihwkIHQAYgIeTx78hUJGAUP2rNP7tcWICKuqT2x0TEDoAMACOtcD06REQqv/tjVXpe0xAemWls2OhAwADoCMrIhUhIFT/Sk3/4VgxASL1kFyYf3p6PRMZGIDk1MmGXRMQqX2VM2pcnO2PXuEvBrrWM/MXJPDR6fVMZGAACuaWyyEwiYBI7aucUZPixARMEiTP+yUgdABgAPxKg9USICBU/5Oaq8rzmIAE6kpmi0IHAAZARlUEqkJAqP5VGnyeODEBKgUSe5xCBwAGIHYxsj/vBITqP09jVboGE+Bd7Sy4i4DQAYAB2JU9HoBANQJC9a/U3PPGigmoJl/urkrgT06vZwrjo9P83wCr5pr7IfAwAYXajzxGTMDDouTf/gioFBcGwJ8mWCkdAir1H3mcmIB0Si6snaoUFgYgLN0QTRwEVOo/gTgxAXGUlNYu/uTV9UxhYAC0dEW0GgQUaj+hGDEBGmUTT5QqxYUBiEdz7CQcAir1n1CcmIBwyiP+SFQKCwMQvxbZoX8CKvWfWJyYAP+lkOaKf/zqeiYx+C2ANAXKrp0SkKh9lTPKbpztD/h/BzjVPpNPTU3JHAAYAPQKAesEZOrfbnPVeNHz6jomwLrimXAHAZkDAAOwI2/8AwI2CMjUf5oGwBgVTIANoTPHcAIyBwAGYHgCeRQCFQjI1H+6BgATUEHf3DqBgMwBgAGYkEmehkBxAjL1n7YBwAQUlzZ35CHw4avrmcTAAORJJ9dAoBABidpXOaPcx8mPAwqpm4snEvjwlfVMZPA/A5qYTS6AQDECIrWvckb5iBMTUEziXD2OgNABgAEYl0ieg0AJAkL176O5qqyBCSihdW4ZQkDoAMAADMkfD0GgCgGh+ldpzr7ixARUET733iMgdABgABAtBCwTEKp/X41VaR1MgOV6SG46oQMAA5CcOtmwawJC9a/UmH3GiglwXSQxz//BK+uZwvjwlXUMQMxCZG+1EFCofWKceEZjAmqpnggWVSkuDEAEYmMLwRFQqX/ixAQEVzwxBKRSWBiAGNTGHkIjoFL/xDnRAJh3cnknILQCCz0elcLCAISuJOJTJKBS/8SZywBgAhSLsM6YPzi1nimMD0/xGYA6dcLacRJQqH1iLHxG805AnOVqf1d/dGo9Exl8CNB++pkxcQIita9yRoUUJyYg8drOtX2hAwADkCujXASB/ASE6j+k5qoSCyYgfymkeaXQAYABSFOi7NohAaH6V2m6ocWJCXBYP/JTCx0AGAB5tbGB0AgI1X9ojVUpHkxAaIUXSjxCBwAGIBTREEc0BITqX6nhhhgrJiCaqrW4EaEDAANgMe9MBQFDQKj+Q2yqajFhAij7nQR+cKqfiQwMwM7U8S8IVCYgUvsqZ5RCnO0PXuk9Xlk4TBAHAaEDAAMQh+TYRUAEhOpfobmqxIgJCKgGaw3lBy/3M4lxqo8BqFUpLB4jAYnaVzmjtOLEBMRY0EX3JHMAYACKppbrITCRgEz9azVXjRdVL/ebEwXCBXETkDkAMABxC5Hd1UJApv4xAE5MRS2iY9FwCMgcABiAcERDJNEQkKl/DAAGIJqqC2gj/+HlfqYwfoABCEg1hBILAYXaJ0Z3Z3QsOmYfJQmoFBcGoGSCuQ0CYwio1D9xujEBY6TBUykQUCksDEAKamSPvgmo1D9xYgB810YS66kUFgYgCTmySc8EVOqfODEAnksjjeVUCgsDkIYe2aVfAir1T5wYAL+Vkchqf/idfiYy+ENAiWiSbfojIFL7KmeUXJz+lMZKQRIQOgAwAEEqiKCUCQjVv1xzVWCrrF1it0BAQaRfxogBsJBvpoDAdgJC9Y8BcPBu7XYt8H2CBIQOAAxAgvpky24JCNU/BgAD4LYYUpxd6ADAAKQoUPbslIBQ/WMAMABOayHJyYUOAAxAkgpl0y4JCNU/BgAD4LIU0pz7+9/pZyIDA5CmRNm1QwIita9yRsnF6VBaTK1AQOgAwAAoCIoYpQgI1b9cc1VgKyVWgrVPQEGkX8aIAbCffmZMnIBQ/WMAHLxbm7j82f73T/YzkYEBQK4QsExApPZVzii5OC3LienUCAgdABgANXERb/AEhOpfrrkqsA1eoATolsD3TvYzhfH9k30MgFspMHuCBBRqnxjdndEJSp4tbyegUlwYgO1Z43sI2CGgUv/E6cYE2FERs8gSUCksDICsxAg8YAKmrhh2GXzvZP+vVM7VgKVJaD4IqAgVA+BDDawBAQhUJWDOKpVztepeuV+cgIpQMQDiQiN8CCRCAAOQSKJj2CYGIIYssgcIQCAUAhiAUDJBHBMJfPdkPxMZ/BbAxGxyAQQgUDeB757sN0TO1KxuVqxfM4HvnuhnEoNfA6xZKSwPAQjkIbBlAETO1Tz74ZqICUg0f1NMGICIVcjWIBAPAQxAPLmMficYgOhTzAYhAAGPBDAAHmGzVDUCGIBq/LgbAhCAwHYCGIDtNPg+aAI3T/QzicGPAILWEcFBAAL3CNw82W9InKkn+nwIMHXRqgjVFFXquQp5/42T67+6spL9UsgxxhDbjxezX3z/6PqvxbCXWPeAAYg1sxHuCwMQYVI9b+l7JzceuXmif+fmif4HH57Oftnz8sks12hkX/3u8d47N0/02zdO9J5MZuNiG8UAiCUs5XAxAClnv/retzX/wY+SMAHVse6awTT/myd617bVKyZgF6UwHsAAhJEHoshBYNuBMjjAw/zKjwByZNPvJUOa/0A7mACLqRjS/AecMQEWOduaCgNgiyTzOCdw83g/Exl8BsC5GvIvsNX8j/fvjNTOsf4f8eOA/DxHXbnV/I/3ro3kfJwfB4xiV9fjN4/3G2PyFdR5Wxcj1g2EwPvH+5nCMEUVCLLkw2iYn/kf79+ZpJsbmIBKWjHN//3jvWuTOL+PCajE2fbN5qzKkbMgzl3be2c+MQIqQsUAhCGsvM1/oCtMQLm8FWj+g0bCjwPKobZ+FwbAOlImdEVgcFCH/hUD4EoB+ect2vwHmsIE5Gdsrvzybf+rA34FvmICiqF2cjUGwAlWJnVB4P3jvUxhYABcZD//nI2TnS/f9i+nlxvHenwmIAfuB82/HOf3j/cwATk4u7zkngEonT+v57FLDswtQECh+ZsYMQD1ialq8x9oDBMwPocWmv+geWACxqN2+iwGwCleJrdJ4MbxXqYx+BCgzbznncs0/xvH+3esaYR3AoaiN83/xvHeVWuceSdgKGcfD9443m9YzKPT89kHD9YImICKUE1RBYwxytCsN/+B2cQE7NCLg+Y/aBq8E7CDtJ9/YAD8cGYVCwRuHOtlGgMDYCHduadoHOk8cuNY/447bfRv8v8OuPeBvxvHe1fcce61bxzhzwbnFr6FC28c6zcc5tPqeW1hu0yhTEBFqKaolDkrxe6++Q9MZ9om4MtX/i6b/6BZYAI8FiAGwCNslqpGAANQjV9sd/tr/mmbAI/NHxPguUgxAJ6Bs1x5AhiA8uxiu7NxovvojaO9pn9NpPVOQA3NHxPgsVgxAB5hs1Q1Ao1jvUxj8COAapkef7dp/o2jvWZ9WkjDBAyaf32c+UzA+Eqo/mzjWL9RY34LnefVd8sM0gRUhGqKShp0wMHX3/wHJjRuExBA8x80Bz4T4LAeMQAO4TK1XQIYALs81WYLp/nHbQICav6YAMdFigFwDJjp7RHAANhjqTZTeM0/ThMQYPPHBDgsVgyAQ7hMbZcABsAuT5XZwm3+cZkA0/wbx3pvB1xn/DjActFiACwDZTp3BN472ssUhikqdxTSmrmx3H30vaO9Zuh5bxzV/kyAaf7Xj/TeDp3ze0d77Xf5Y0HWDgFzVgnkfOvct7ZpJtIkoCJUDIAdfak0/4EuVU2AUPMfvADABNgpsSkMgCWQTOOewOCgDf0rBqC6FtSa/0CTaiZAsPljAqqX1/0ZMAD3UfBN6AQGh2zoXzEA1ZSk2vwf6LL/vsL/O0C4+WMCqpXY/bsxAPdR8E3oBB4csGF/FgADUF5J+s1/oM2wTYBp/u8d7b2lUlNj4uTHAeXLjR8BVGDHrZ4JjDkEBq8IgviKASgnjHiaf9gmIKLmP6h3TEC5ksMAlOTGbTUQuH60l0kMfgugsDpM879+tNeUyG8hHYb1TsDW2/5He2/Fx5nfDihcdFNTU9eP9RsqWiizP+6JiICKUE1RRYTd+Vbibf4DwxqGCYi4+Q9eGPBOQMFqxQAUBMbl9RHAANTH3tXK8Tf/MEzA4mL2C9fjfOU/aP6Dr5iAAsWKASgAi0vrJXD9SC/TGLwDkEcpW83/SK+pkVMr2nsjDxcX17y33D2bEOfWe8vdr7vgGNuc14/0Gyq6iI09+ylIQEWopqgKbi25yxNs/rW+Mr1+uPPr15d7n+nUUGXDVStvlYLGAKhkijin3j3SyzQGBmCcXN9Z7j767pFeUyOXVjQXRDMyJuDd5d5ncB+nzrSee/dIv6Gih7Qyw253EVARqimqXcHzwBYBmn+9QsAE1Ms/tNUxAKFlhHhGEsAAjEQj8QTNP4w0YQLCyEMIUWAAQsgCMeQigAHIhSnIi2j+YaUFExBWPuqKBgNQF3nWLUwAA1AYWRA30PyDSMOuIDABu5Ak9wAGILmU624YA6CXO5p/2DnDBISdH9fRYQBcE2Z+awTeOdLLFIYpKmubFp7INP93jvSaCjmzFGMQn/YvKhljAt5Z7n1miYFCjUrmqWhe81xvziqVvOfZD9dETOCd5V6mMN5dxgBsNf/lXlMhX5ZilG4q902ASI1ZyJl0vmwd8+asssDSy7lsa8/MI0pARaipGwCav2aBYQI081YlagxAFXrc65UABsAr7lKL0fxLYQvmJkxAMKnwEggGwAtmFrFBAANgg6K7OWj+7tj6nBkT4JN2vWthAOrlz+oFCFxb7mUaI73PAJjmf22519TIjxUdta8c6T1ZQL5Sl1453Pn1a8u9z8inVNoKB3ttud9QyXHhzXFDXARUhGqKKi7y43fz7lL3MZr/eEaKz2ICFLNWLGYMQDFeXF0jAQxAjfBHLE3zHwEmkocxAZEkcsQ2MAAjwPBweAQwAGHlhOYfVj5cRYMJcEW2/nkxAPXngAhyEsAA5ATl4TKavwfIAS2BCQgoGRZDwQBYhMlUbglcO9zLJEbknwHYav6He02JXNjRTPvKoXg/8Je3ardMwOHeZ+Q9L7Hwr9syAHZqxPnZHD5NInRK4OrhXiYxIjYAV5a6j1093GtK5MGOXmj+26ramICrh3ufkf9tUIS/vbrcb6jkUhgzodsgcPVwN5MYy90ofwvgXvPvNCVyYEcr7XeWe0/Y0G5Mc9wzAd3PUtJBrO8AXV3uNlTyGFMNsZcSBFSEaoqqxPaCvoXmH3R6vAeHCfCO3MmCGAAnWJnUBQEMgAuqk+ek+U9mlOIVmAD9rGMA9HOYzA4wAP5TTfP3z1xpxS9NwB2Z2qz+o6GoPhOCAVCqtsRjvXK4mymMWH4EYJr/lcOdpgJzSzG23+Zn/oVPmWtHOo9cOdy9YykHCjUejQkwZ5VK3goLkxviIqAi1BgMAM0/rtpxvRtMgGvCbubHALjhyqwOCGAAHEAdMiXNfwgUHppIABMwEVFwF2AAgksJAY0icGWpmymMq0u6vwWw1fyXOk0FzpZi5G3/UQVX4vFrBzuPXFnq3rGUG4V6l/5xgDmrVHJVQo7cEhMBFaGqGoB7zb/bUuFsIU6av4MDAhPgAKqjKTEAjsAyrX0CFg58L68oFA0Azd++XlOeEROgkX0MgEaeiHJqaurtpW4mMqT+EJBp/m8vdVsibG1ogFf+Hk6UNw92Hnl7qXsnJV2p/cXAt5e6DZX8eJAsS4RMQEWopqhC5rg9Npr/dhp8b5sAJsA2UbvzYQDs8mQ2hwQwAHbh0vzt8mS24QQwAcO5hPAoBiCELBBDLgIYgFyYcl1E88+FiYssEcAEWAJpeRoMgGWgTOeOAAbADluavx2OzFKMACagGC8fV2MAfFBmDSsE3lrqZiIj2M8AmOb/1lK3JcLRRr7bby71HrciQCapTMCYgLeWundS0t8bh3pPVgbnaIK3lroNlVw4QsC0KgTeOtTNREaQBmCr+R/qtkQY2sg1zT/A4t4yAYe6d1LSYagm4K1D3YZKHgKUMiH5JKAiVFNUPrnkWYvmn4cS1/gigAnwRXr8OhiA8Xx4NiACGIByyaD5l+PGXW4JYALc8s0zOwYgDyWuCYIABqB4Gmj+xZlxhz8CmAB/rIethAEYRoXHgiSAASiWFpp/MV5cXQ8BTEA93M2qGID62LNyQQJvHupmCsMUVcGtWb/88lL3sTcPdVsKvCzFyAf+rKvI34TGBLx5qHvHkhYUzol2CB8MNGeVCnN/amSlIAmoCLVuA0DzD1K+BDWBACZgAiAHT2MAHEBlSjcEMACTudL8JzPiinAJYAL85gYD4Jc3q1UggAEYD4/mP54Pz2oQwAT4yxMGwB9rVqpI4M2D3Uxh1PEjgK3mf7DbUuBjJ8ZO842l7tcqSorbAyWwZQIOdu/Y0YrEuVHLZwK2DIDIuRqoVAnLF4E3DnYziVHDhwCNAXjjYLclwcdOHvnQn6/Cq2Gdtw52H33jYKeZkp7r+FDgG4e6DRXGNciQJUMioCJUU1R1cMME1EGdNW0ToPnbJjp6PgzAaDY8ExgBDMDkhGACJjPiinAJ0Pz95gYD4Jc3q1UggAHIBw8TkI8TV4VFgObvPx8YAP/MWbEkAQxAfnCYgPysuLJ+AjT/enKAAaiHO6uWIIABKAYNE1CMF1fXQ4DmXw93syoGoD72rFyQwOWD3Uxi1PQhwGE4jQm4fLDbkuBmJ7/t15Z6jw9jwWPhEXj9YPfRywc7zZT0Wcen/Udl/vKhbkOF/ag98HgiBFSEaooqpJRgAkLKBrEMCND8ByTq+4oBqI89KxckcPlANxMZQRkAg/nyYvexywe6LRF+FvLcab6xyB8KKlhi3i7fav4HOs109Nhtv7HYe9Ib4JwLXT7QbajkIOeWuCxWAipCNUUVYg4wASFmJb2YaP7h5BwDEE4uiGQCAQzABEA5nsYE5IDEJc4I0PydoS01MQagFDZuqoPA6we6mcII9R2AQc6MCXj9QLelwNJOjJ3mJX4cMEh/bV9N83/9QKdpJ6cSZ0H7UoBv+28XgDmrVPKxPW6+T5CAilBDNwBGOpiABAuoxi3T/GuEP2ZpDMAYODwVFgEMgN18YALs8mS24QRo/sO5hPAoBiCELBBDLgIYgFyYCl2ECSiEi4sLEqD5FwTm+XIMgGfgLFeeAAagPLtxd2ICxtHhubIEaP5lyfm7DwPgjzUrVSTw+oFOpjAuH+gE+WuA4/A/MAEajC3ogA8GjhNExeceNP9k9NS+tLgW3O/5T0qjOass1JKXc3nSXng+cgKvLXYykSFnAIx0Vhe7j7222G2JMLahBUyAgzPDNP/XFjvNZHS0vyPZ/E3qX1vsNFTy5ECqTKlEQEWopqiUuG6PFROwnQbfFyVA8y9KrN7rMQD18mf1AgQwAAVgVbgUE1ABXsK30vz1ko8B0MtZshFjAPylHhPgj3UMK9H8NbOIAdDMW5JRYwD8ph0T4Je36mo0f9XM8RkA3cwlGPmlxU4mMmQ/A/CwrIwJuLTYbYlwr6yP1UX+bPDDGhj3b9P87zGTqc1qGhH+wN+wPF5a7DRUantY/DyWEAEVoZqiiiktqZmAS/s7d/l/B0xWMM1/MqPQr8AAhJ4h4rtPAANwH4X3bzAB3pEHvSDNP+j05A4OA5AbFRfWTQADUG8GMAH18g9ldZp/KJmoHgcGoDpDZvBE4NL+TiYxIvsRwPb03jcBKrmoHicWgjz1AAAWm0lEQVQ/DtgmgNcXuo+u7u80Jeqweu7NeSP7R362pW3kt1sGwA4n52fzyE3wRBoEZA6diA2AURomII16e3iXNP+Hiej/GwOgn8NkdrC6v5MpDFNUsSfFmIDVxW5LIR+WYkz6nYCLX77yt8RSoY6jfuU/OJ/MWaWS00HMfE2UgIpQUzAARoKYgDQKkeYfb54xAPHmNrqdYQDCSykmILyc2IyI5m+TZnhzYQDCywkRjSCAARgBpuaHUzQBKwvd36gZu/Plaf7OEde+AAag9hQQQF4CGIC8pPxfhwnwz9zlijR/l3TDmRsDEE4uiGQCgZX9nUxiJPAhwGGpMiZgZbHbksiRHS3djfGdANP8V/Z3mgnlsX1hce3JYZqO/bGVxU5DJc+x54L9TSCgIlRTVBO2Eu3TmADt1NL8tfNXNHoMQFFiXF8bgZV9nUxkJGsAjDi2TMC+bkskVzY0FcU7AVvNf1+nmVDekn3lPzjEV/Z1Gir5HsTM10QJqAjVFFWiKbq/bUzAfRQS39D8JdJkPUgMgHWkTOiKAAbAFVk3894zAUm9opR8J4Dm70b/CrNiABSyRIxbBDAAekLABISdsxSb/+pC74mws+IvOgyAP9asVJHAxX2dTGQk/yOA7ak2JuDivk5TJHc2NCbxToBp/onlpU3z316ZU1MX93UaKnW5M3L+lRwBFaGaokouORM2jAmYAMjz0zR/z8ADXQ4DEGhiCGs3AQzAbiZKj2ACwsgWzT+MPIQQBQYghCwQQy4CGIBcmIK+CBNQb3po/vXyD211DEBoGSGekQQwACPRSD2BCagnXTT/eriHvCoGIOTsENsOAhcWOpnCuLjAZwB2JG7IP87NdR+7sNBpKuTTUoy1fjDQNP+UeJ9f6LTP82n/IZW38yFzVlnSt/OzeWfk/Cs5AipCxQDkk+aFhe7XLyx0Wyp5rRrnxX2ds/nI2L/qwnxntWr8OvcbTXW/bp9ifDNiAOLLabQ7UjmAMAD5JZjOOwHtdxtPZV/NT8bulWbtiwvdKyo1VDZOXvkX0w0GoBgvrq6RQNlDwfd9GIBiIonfBLTfXVzMfrEYFftXx24CaP7FNYMBKM6MO2oi4LuRl10PA1BcIPGagDCa/yAjsZoAmv8gw8W+YgCK8eLqGgmUbci+78MAlBNJbCbg/Hz7egiv/B/ORmwmgOb/cIbz/xsDkJ8VV9ZM4PxCJxMZ/CXAkloxJuD8QqcpkufRegy0+Q/SYkzA+YXuFXnOfNp/kNJSX88vdBoqGii1QW6Kh4CKUE1RxUPd/07kTUDgzX+Q0QhMAL/qN0hmya8YgJLguM0/AQyAf+Z1rShrAkSa/yCvwiaA5j9IYoWvGIAK8LjVL4Hz851MYvAOgBVhbJmA+U5TIudb2gzzZ/6TkrFlAua7V3Q480d+JuU07/NbBkDkXM27J66LlIDMAYUBsKZAFRNwbr79Xogf+MubCCETwCv/vEnNcR0GIAckLgmDwLn5TiYxMABWBWNMwLn5TjPc3Gs3/0GyjAk4N9+9Ei5nXvkPcmXr67mFTiPgfO84723tmXlECagI1RSVKOJgww7XBMTR/AeJD9gE8Mp/kCSLXzEAFmEylVsC5+bbmcTAADgRwrm51mPn5tvNgDQg/bb/qCTdMwHtqwFxbp9fWHtiVLw8Xp7APQOgca6W3yV3RkEgoANpvBHBADjTW0AmIMrmP0hcQCaA5j9IioOvGAAHUJnSDQEMgBuuarMGYAKibv4DPQRgAmj+g2Q4+ooBcASWae0TwADYZ6o6Y40mIInmP9BFjSaA5j9IgsOvGACHcJnaLoGz8+1MYZiisrtzZhtGwJiAs/Ptpi9NmLwq/6rfMIZ5HjMm4Ox8+6ovzmfn2zT/PImxcI3RtMe8Vjq/LWyXKZQJnJ1rZwrj3BwGwJfOtkzAXLvpWhcmpyk2/0Eet0zAXPuqa85n59rt8zN84G/A3fVXo2sPObVybrtmwfyBE1ARKgbAr5Bcm4DUm/8gmx5MAM1/ANvTVwyAJ9AsU50ABqA6w1hncGUCaP47FePQBND8d6L28i8MgBfMLGKDAAbABsV457BtAmj+w7XiwATQ/Iejdv4oBsA5YhawReDMXDvTGHwGwFbOi87z6lzrsTNz7WZVnZyd7dxI+Wf+k7gPTEBVzmfm2u3T/Mx/Em5nz5+Z6zQs5NDLuewMAhNrEFARqikqDaJxRlnVBND88+nCmIAz8+1rFeqS5p8PtbOrMADO0DKxbQIVDhovDvVBfBgA27kvOl9ZE0DzL0a6ggmg+RdD7eRqDIATrEzqgsCDBhv6jwIwAC7yX3TOoiaA5l+U8L3rS5gAmn851NbvwgBYR8qErghgAFyRjXfevCaA5l9NAwVMAM2/Gmqrd2MArOJkMpcEzsy2M43BOwAudVB07i0TMNtujtIOzb8o0eHXb5mA2fa1UZzPzPKBv+Hk6nv0zGynMSZfQZ239VFi5SAInJ5tZxoDAxCEYLYFYUzA6dl2c7d+OjdWfj/7pW2X8m0FAsYEvDrbvrabM82/AlZnt56e7TSG5CrIc9YZBCbWIKAiVFNUGkTTinK3CaD5u1DAEBPA2/4uQFuYEwNgASJT+CGAAfDDOeZVBibg1dnO+7zyd5fpbSaA5u8Oc+WZMQCVETKBLwIYAF+k417n7MLar/FHftzn2DA2rN2vxAplCWAAypLjPu8EMADekbMgBCAQMQEMQMTJjW1rr862M4Vhiio29uwHAhCIj4A5qxTOVBNjfPTZUSECKkLFABRKKxdDAAI1EcAA1ASeZYsTwAAUZ8YdEIAABEYRwACMIsPjwRF4daadKQzeAQhOOgQEAQgMIbBlAETO1SHh81BKBBSav4kRA5CSKtkrBHQJYAB0c5dc5BiA5FLOhiEAAYcEMAAO4TK1XQKvzLQzicFvAdhNPLNBAAJOCLwy22lInKkz/BaAEwEoTaoiVFNUSlyJFQIQSJMABiDNvEvuGgMgmTaChgAEAiWAAQg0MYS1mwAGYDcTHoEABCBQlgAGoCw57vNOAAPgHTkLQgACERPAAESc3Ni2dmqmnUkMPgMQm/TYDwSiJHBqttOQOFP5EGCU+iu0qVMvtTONwYcACyWWiyEAgVoInHqp09A4U/ktgFoEEtKiKkI1RRUSN2KBAAQgMIwABmAYFR4LkgAGIMi0EBQEICBKAAMgmrgUw8YApJh19gwBCLgigAFwRZZ5rRPAAFhHyoQQgEDCBDAACSdfbesvv9TOFIYpKjW2xAsBCKRHwJxVCmeqiTG97LDjHQRUhIoB2JE2/gEBCARKAAMQaGIIazcBDMBuJjwCAQhAoCwBDEBZctznnQAGwDtyFoQABCImgAGIOLmxbe3lF9uZwjj1Ip8BiE177AcCMRIwZ5XCmWpijJE/eypA4DsvrmUigw8BFsgrl0IAAvUQ+M6Law2RMxUDUI9EwllVRaimqMKhRiQQgAAEhhPAAAznwqMBEsAABJgUQoIABGQJYABkU5de4BiA9HLOjiEAAXcEMADu2DKzZQIYAMtAmQ4CEEiaAAYg6fRrbR4DoJUvooUABMImgAEIOz9Et43AyRfXMpHBhwC35Y1vIQCBMAmcfHGtIXKm8lsAYUrIX1QqQjVF5Y8KK0EAAhAoRwADUI4bd9VA4OS31zKJgQGoQR0sCQEIFCWwZQBEztWie+P6yAhINH9TTBiAyJTHdiAQJwEMQJx5jXJXGIAo08qmIACBmghgAGoCz7LFCZz49lqmMHgHoHhuuQMCEPBPwJxVCmeqidE/HVYMioCKUDEAQcmGYCAAgREEMAAjwPBweAQwAOHlhIggAAFdAhgA3dwlFzkGILmUs2EIQMAhAQyAQ7hMbZcABsAuT2aDAATSJoABSDv/UrvHAEili2AhAIHACWAAAk8Q4T0gcPxba5nI4C8BPkgb30EAAoESOP6ttYbImcpvAQSqIW9hqQjVFJU3KCwEAQhAoCQBDEBJcNzmnwAGwD9zVoQABOIlgAGIN7fR7QwDEF1K2RAEIFAjAQxAjfBZuhgBDEAxXlwNAQhAYBwBDMA4OjwXFIFj31rLRAafAQhKOQQDAQgMI3DsW2sNkTOVDwEOS2BKj6kI1RRVSnlhrxCAgCYBDIBm3pKMGgOQZNrZNAQg4IgABsARWKa1T+DYC2uZyOAdAPvpZ0YIQMAygWMvrDVEzlR+BGA593LTqQjVFJUcXAKGAASSI4ABSC7luhvGAOjmjsghAIHwCGAAwssJEY0gcPSFtUxh8A7AiATyMAQgEBQBc1YpnKkmxqDAEYx/AipCxQD41wYrQgACxQlgAIoz446aCGAAagLPshCAQJQEMABRpjXOTWEA4swru4IABOohgAGohzurliCAASgBjVsgAAEIjCCAARgBhofDI3DkhbVMZPBrgOHJh4ggAIGHCBx5Ya0hcqbyIcCHcpfcP488v5ZJDP4OQHLaZMMQUCSwZQBEzlVFvsRskYBE8zfFhAGwmHWmggAEXBHAALgiy7zWCWAArCNlQghAIGECGICEk6+2dQyAWsaIFwIQCJkABiDk7BDbDgIYgB04+AcEIACBSgQwAJXwcbNPAsvPr2USg88A+JQFa0EAAiUJLL+w1pA4U5/nTwGXTHE8t6kI1RRVPNTZCQQgECsBDECsmY1wXxiACJPKliAAgdoIYABqQ8/CRQksP9/KJMYLLd4BKJpcrocABLwTWH6h1ZA4U59v8YeAvKsjsAWXn2tlIgMDEJh2CAcCENhNYPm5VkPkTMUA7E5fWo8cfq6VKQxTVGllht1CAAKKBMxZpXCmmhgV+RKzRQIqQsUAWEw6U0EAAs4IYACcoWVi2wQwALaJMh8EIJAyAQxAytkX2zsGQCxhhAsBCARNAAMQdHoIbjsBDMB2GnwPAQhAoBoBDEA1ftztkQAGwCNsloIABKIngAGIPsXxbHDpuVYmMvgtgHhkx04gEC2BpedaDZEzld8CiFaFOTemIlRTVDm3xGUQgAAEaiOAAagNPQsXJbD0bCsTGRiAosnleghAwDuBpWdbDZEzlXcAvKsjsAVVhGqKKjB0hAMBCEBgFwEMwC4kPBAqAQxAqJkhLghAQJEABkAxa4nGfOjZViYyeAcgUY2ybQgoETj0bKshcqbyIwAlYbmIVUWopqhc7J85IQABCNgkgAGwSZO5nBLAADjFy+QQgEBiBDAAiSVcebsYAOXsETsEIBAaAQxAaBkhnpEEMAAj0fAEBCAAgcIEMACFkXFDXQQwAHWRZ10IQCBGAhiAGLMa6Z4O/kErUximqCJNAduCAAQiImDOKoUz1cQYEXa2UoaAilAxAGWyyz0QgIBvAhgA38RZrzQBDEBpdNwIAQhAYBcBDMAuJDwQKgEMQKiZIS4IQECRAAZAMWuJxowBSDTxbBsCEHBCAAPgBCuTuiBw4A9amcTgQ4Au0s+cEICAZQIHnm01JM5UPgRoOfOC06kI1RSVIF5ChgAEEiOAAUgs4crbxQAoZ4/YIQCB0AhgAELLCPGMJIABGImGJyAAAQgUJoABKIyMG+oicOCZViYy+BFAXSJhXQhAIDeBA8+0GiJnKn8IKHdWI71QRagHnmn9/MAza08xYIAG0EDYGjBnlcYLq0jbGtvKS2DxmVbGgAEaQANoID0N5O0TXBcpAYo+vaIn5+QcDaABo4FI2xrbykuAg4CDAA2gATSQpgby9gmui5QAhZ9m4ZN38o4G0ECkbY1t5SXAIcAhgAbQABpIUwN5+wTXRUpg/zOtjAEDNIAG0EB6Goi0rbGtvAQo+vSKnpyTczSABowG8vYJrouUwP5vtjIGDNAAGkAD6Wkg0rbGtvISoOjTK3pyTs7RABowGsjbJ7guUgIcBBwEaAANoIE0NRBpW2NbeQlQ+GkWPnkn72gADeTtE1wXKYF932xlDBigATSABtLTQKRtjW3lJbDvm82MAQM0gAbQQHoayNsnuC5SAhR9ekVPzsk5GkADRgORtjW2lZcABwEHARpAA2ggTQ3k7RNcFykBCj/Nwifv5B0NoIFI2xrbyktgYW8zY8AADaABNJCeBvL2Ca6LlABFn17Rk3NyjgbQgNFApG2NbeUlwEHAQYAG0AAaSFMDefsE10VKgMJPs/DJO3lHA2gg0rbGtvIS4BDgEEADaAANpKmBvH2C6yIlsLC3uUHxp1n85J28o4GkNdCPtK2xrbwE5vc2P5vf28wYMEADaAANJKWB/5u3T3BdpAQW9jb/C0WfVNFj9jC8aAANZPN77/5lpG2NbeUlML+3+YcYAAwAGkADaCA1Ddz9Xt4+wXWREpjf0zw4v6eZMWCABtAAGkhKA/sjbWtsKy+BfdN3/wVFn1TRY/YwvGgADWTzez5/Mm+f4LpICSz+bva35/c0m5gATAAaQANoIBkNfL53b/bLkbY1tlWEwNz03dfn9jQzBgzQABpAAylo4O5rRXoE10ZMYG5v82sUfQpFzx7RORpAA81sbm/zn0Xc0thaUQJze1o/pjA4HNEAGkADkWtguvVnRfsD10dOYGa69ejcnub/o/gjL35+1MOPutBAyhr4m4Xp5m9E3s7YXhkCfBaA5o8BRANoIGYN8LP/Mr0xiXu+/e3/83dn9zT/2+yeZsaAARpAA2ggKg38j8W9n/1KEs2MTZYjMLfn7j+dnW52ZqebGQMGaAANoIEoNNB56Rt3HynXFbgrKQKz32j+9ux0c5PCj6LwMXKYWTSQtga+mNnT+tdJNTE2W43A3J67/3Z2utnHBGAC0AAaQAOyGujNPP35v6nWDbg7SQIz31h7Yma6+dcUv2zx88ov7Vd+5D/t/P/vuem1x5NsXmzaDoHZ3+/8/Zmnmz/EBGAC0AAaQAMaGpjb0/zInN12ugCzJE4g+8rsnubvzEy3/mpmupkxYIAG0AAaCFID/3N2uvnvEm9YbN8FAfM/j5h5+u7vzey5+5cUf5DFjznDoKKBJDVw9z+/NN3694uL2d9ycfYzJwR2EHhx7+f/5KWnm/tnp+/+dGa62cEQYAjQABpAA9400JnZc/cnM9PNfbPfuPOPdxzO/AMCfglkX5mb/vwfvPh065/PTDd/66U9d59iwAANoAE0YE8D5mw1Z6w5a6emsq/4PeNZDQIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCDgg8D/B4j73te2ZjCuAAAADmVYSWZNTQAqAAAACAAAAAAAAADSU5MAAAAASUVORK5CYII=
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        unsafeWindow
// @updateURL    https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Menu@main/Userscript/Menu.js
// @downloadURL  https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Menu@main/Userscript/Menu.js
// ==/UserScript==

"use strict";

 if (window.location.href.endsWith("?executor")) {
        launchExecutor();
    }

function launchExecutor() {
    if (document.getElementById('executor-menu')) return;


    const ExecutorVersion = 'V2.0.0';

    (async () => {
    try {
        const res = await new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: 'GET',
                url: 'https://cdn.jsdelivr.net/npm/sweetalert2@11',
                onload: (r) => resolve(r),
                onerror: reject
            });
        });
        injectScriptToPage(res.responseText);
        console.log("Swal loaded");
    } catch (e) {
        console.error("Failed to load Swal:", e);
    }
})();


    const menu = document.createElement('div');
    menu.id = 'executor-menu';
    menu.style.cssText = `
      position: fixed;
      top: 100px;
      left: 100px;
      width: 400px;
      height: 350px;
      background: #f5f5f7;
      color: #333;
      border: 1px solid #ccc;
      border-radius: 12px;
      z-index: 99999;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      font-family: Arial, sans-serif;
      user-select: none;
      overflow: hidden;
      transition: opacity 0.3s ease, height 0.3s ease, border-radius 0.3s ease;
      opacity: 0; `;

    setTimeout(() => {
        menu.style.opacity = '1';
    }, 10);

    document.body.appendChild(menu);

    const header = document.createElement('div');
    header.style.width = '100%';
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.padding = '8px 10px';
    header.style.background = '#e5e5e7';
    header.style.borderBottom = '1px solid #ccc';
    header.style.borderRadius = '12px 12px 0 0';
    header.style.cursor = 'grab';
    header.style.boxSizing = 'border-box';

    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.gap = '8px';
    header.appendChild(buttonContainer);

    const createButton = (color) => {
        const btn = document.createElement('div');
        btn.style.width = '12px';
        btn.style.height = '12px';
        btn.style.borderRadius = '50%';
        btn.style.background = color;
        btn.style.border = '1px solid rgba(0,0,0,0.1)';
        btn.style.cursor = 'pointer';
        return btn;
    };

    const closeButton = createButton('#ff5f57');
    const minimizeButton = createButton('#ffbd2e');
    const maximizeButton = createButton('#28c840');

    buttonContainer.appendChild(closeButton);
    buttonContainer.appendChild(minimizeButton);
    buttonContainer.appendChild(maximizeButton);

    const title = document.createElement('div');
    title.innerText = `Executor ${ExecutorVersion}`;
    title.style.marginLeft = 'auto';
    title.style.marginRight = '';
    title.style.fontSize = '14px';
    title.style.color = '#333';
    header.appendChild(title);

    const searchContainer = document.createElement('div');
    searchContainer.style.marginLeft = 'auto';
    searchContainer.style.display = 'flex';
    searchContainer.style.alignItems = 'center';

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search...';
    searchInput.style.width = '120px';
    searchInput.style.padding = '5px';
    searchInput.style.border = '1px solid #ccc';
    searchInput.style.borderRadius = '8px';
    searchInput.style.fontSize = '12px';
    searchInput.style.color = '#000';
    searchInput.style.backgroundColor = '#fff';

    searchContainer.appendChild(searchInput);
    header.appendChild(searchContainer);

    menu.appendChild(header);

    const sidebar = document.createElement('div');
    sidebar.style.width = '140px';
    sidebar.style.height = 'calc(100% - 30px)';
    sidebar.style.background = '#d3d3d3';
    sidebar.style.borderRight = '1px solid #ccc';
    sidebar.style.float = 'left';
    sidebar.style.boxSizing = 'border-box';
    menu.appendChild(sidebar);

    const sidebarButtons = ['All', 'Games', 'Tools', 'Game Cheats', 'Fun', 'Settings'];
    const buttonGroups = {
        'All': [{
                text: 'Dark&Light Mode',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/LightDarkMode/optomized1.js'
            },
            {
                text: 'Clear Session Storage',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/clear-sessionStorage.js'
            },
            {
                text: 'X-Ray',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/x-ray.js'
            },
            {
                text: 'Draw On website',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/drawonwebsite.js'
            },
            {
                text: 'Wordle Unlimited Hack',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/wordle-unlimited-hack.js'
            },
            {
                text: 'DOMI',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/DOMI.js'
            },
            {
                text: 'wasm-patcher',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/wasm-patcher.js'
            },
            {
                text: 'Clear Cache',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/clear-cache.js'
            },
            {
                text: 'Clear IndexDB',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Clear-IndexDB.js'
            },
            {
                text: 'Clear Session Storage',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/clear-sessionStorage.js'
            },
            {
                text: 'Inspect (Toggle)',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/inspect.js'
            },
            {
                text: 'Auto Scroll',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Auto-Scroll.js'
            },
            {
                text: 'Old School',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Old-School.js'
            },
            {
                text: 'Browser',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Browser-In-Browser.js'
            },
            {
                text: 'Wordle+',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Games%20/Wordle+/mainfile.js'
            },
            {
                text: 'Slope',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Games%20/Slope/menu.js'
            },
            {
                text: 'DragonX V2 International',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Games%20/MineCraft-DragonX-V2/mainfile.js'
            },
            {
                text: 'Flappy Bird',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Games%20/Flappy%20Bird/menu.js'
            },
            {
                text: 'Earthquake',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/earthquake.js'
            },
            {
                text: 'Star Wars Intro',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Star-Wars-Intro.js'
            },
            {
                text: 'Google Translate Page',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/translate-page.js'
            },
            {
                text: 'Time Shooter 2',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/TimeShooter-2/mainfile.js'
            },
            {
                text: 'Color Picker',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/color-picker.js'
            },
            {
                text: 'Wordle Hack',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/wordle-hacks.js'
            },
            {
                text: 'Clear Local Storage',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Local-Storage-Clear.js'
            },
            {
                text: 'Prodigy Cheats',
                url: 'https://pxi-fusion-menu.pages.dev/beta/main.js'
            },
            {
                text: 'Matrix',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Matrix.js'
            },
            {
                text: 'Clear Cookies',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/clear-cookies.js'
            },
            {
                text: 'Custom Cursors',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Custom%20Cursors/script.js'
            },
            {
                text: 'Glitch Images',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/glitch_image.js'
            },
            {
                text: 'WebGL-Fluid-Simulation',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/Games%20/WebGL-Fluid-Simulation/mainfile.js'
            },
            {
                text: 'Auto Clicker V2',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/autoclicker.js'
            },
            {
                text: '2048',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/2048/mainfile.js'
            },
            {
                text: 'MineCraft (Offline)',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/MineCraft_(Offline)/MineCraft_(Offline).js'
            },
            {
                text: 'Snow',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/snow.js'
            },
            {
                text: 'Gimkit Hacks',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Gimkit%20Hacks/Gimkit.js'
            },
            {
                text: 'Cloaker',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Tab_Cloaker.js'
            },
            {
                text: 'Kahoot Hacks',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Kahoot%20Hacks/KahootHacks.js'
            },
            {
                text: 'History Flooder',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/HistoryFlooder.js'
            },
            {
                text: 'Ego-Client',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/ego-client.js'
            },
            {
                text: 'Kahoot Botter',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/kahoot-botter.js'
            },
            {
                text: 'Dev Console',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/DevConsole.js'
            },
            {
                text: 'Blooket Bot',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/blooketbot.js'
            },
            {
                text: 'Car-Axle-Client',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/car-axle-client.js'
            },
            {
                text: 'MineCraft Overlay',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/MineCraftOverlay.js'
            },
            {
                text: 'Fps Viewer',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/fps-viewer(Needs-Update).js'
            },
            {
                text: 'Dictionary',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/dictionary.js'
            },
            {
                text: 'Ad Blocker',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/adblocker.js'
            },
            {
                text: 'Blooket Cheats',
                url: 'https://cdn.jsdelivr.net/gh/randomstuff69/blooketcheatsplus@main/GUI/Gui.js'
            },
            {
                text: 'Cookie Clicker Cheats',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Cookie%20Clicker%20Hacks/mainmenu.js'
            },
            {
                text: 'Chrome Dino Cheats',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Chrome_Dino_Hacks.js'
            },
            {
                text: '3D Webpage',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/3Dpage.js'
            },
            {
                text: 'Snake X More Menu Mod',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Google_SnakeXMore_Menu_Mod.js'
            },
            {
                text: 'Duolingo Cheats',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Duolingo%20Mod%20Menu/menu.js'
            }
        ],
        'Games': [{
                text: 'Snake X More Menu Mod',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Google_SnakeXMore_Menu_Mod.js'
            },
            {
                text: '2048',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/2048/mainfile.js'
            },
            {
                text: 'Wordle+',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Games%20/Wordle+/mainfile.js'
            },
            {
                text: 'Slope',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Games%20/Slope/menu.js'
            },
            {
                text: 'DragonX V2 International',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Games%20/MineCraft-DragonX-V2/mainfile.js'
            },
            {
                text: 'Flappy Bird',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Games%20/Flappy%20Bird/menu.js'
            },
            {
                text: 'WebGL-Fluid-Simulation',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/Games%20/WebGL-Fluid-Simulation/mainfile.js'
            },
            {
                text: 'Time Shooter 2',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/TimeShooter-2/mainfile.js'
            },
            {
                text: 'MineCraft (Offline)',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/MineCraft_(Offline)/MineCraft_(Offline).js'
            }
        ],
        'Tools': [{
                text: 'Cloaker',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Tab_Cloaker.js'
            },
            {
                text: 'Clear Cache',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/clear-cache.js'
            },
            {
                text: 'X-Ray',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/x-ray.js'
            },
            {
                text: 'wasm-patcher',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/wasm-patcher.js'
            },
            {
                text: 'Clear IndexDB',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Clear-IndexDB.js'
            },
            {
                text: 'Clear Session Storage',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/clear-sessionStorage.js'
            },
            {
                text: 'Browser',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Browser-In-Browser.js'
            },
            {
                text: 'Google Translate Page',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/translate-page.js'
            },
            {
                text: 'Auto Scroll',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Auto-Scroll.js'
            },
            {
                text: 'Color Picker',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/color-picker.js'
            },
            {
                text: 'Clear Local Storage',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Local-Storage-Clear.js'
            },
            {
                text: 'Clear Cookies',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/clear-cookies.js'
            },
            {
                text: 'Fps Viewer',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/fps-viewer(Needs-Update).js'
            },
            {
                text: 'Custom Cursors',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Custom%20Cursors/script.js'
            },
            {
                text: 'Inspect (Toggle)',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/inspect.js'
            },
            {
                text: 'Ego-Client',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/ego-client.js'
            },
            {
                text: 'Car-Axle-Client',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/car-axle-client.js'
            },
            {
                text: 'History Flooder',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/HistoryFlooder.js'
            },
            {
                text: 'Dictionary',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/dictionary.js'
            },
            {
                text: 'Ad Blocker',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/adblocker.js'
            },
            {
                text: 'Dev Console',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/DevConsole.js'
            },
            {
                text: 'Dark&Light Mode',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/LightDarkMode/optomized1.js'
            },
            {
                text: 'Auto Clicker V2',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/autoclicker.js'
            }
        ],
        'Game Cheats': [{
                text: 'Blooket Cheats',
                url: 'https://cdn.jsdelivr.net/gh/randomstuff69/blooketcheatsplus@main/GUI/Gui.js'
            },
            {
                text: 'Wordle Unlimited Hack',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/wordle-unlimited-hack.js'
            },
            {
                text: 'Prodigy Cheats',
                url: 'https://pxi-fusion-menu.pages.dev/beta/main.js'
            },
            {
                text: 'wasm-patcher',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/wasm-patcher.js'
            },
            {
                text: 'Wordle Hack',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/wordle-hacks.js'
            },
            {
                text: 'Kahoot Botter',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/kahoot-botter.js'
            },
            {
                text: 'Blooket Bot',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/blooketbot.js'
            },
            {
                text: 'Cookie Clicker Cheats',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Cookie%20Clicker%20Hacks/mainmenu.js'
            },
            {
                text: 'Kahoot Hacks',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Kahoot%20Hacks/KahootHacks.js'
            },
            {
                text: 'Gimkit Hacks',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Gimkit%20Hacks/Gimkit.js'
            },
            {
                text: 'Chrome Dino Cheats',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Chrome_Dino_Hacks.js'
            },
            {
                text: 'Duolingo Cheats',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Duolingo%20Mod%20Menu/menu.js'
            },
            {
                text: 'Snake X More Menu Mod',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Google_SnakeXMore_Menu_Mod.js'
            }
        ],
        'Fun': [{
                text: 'Draw On website',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/drawonwebsite.js'
            },
            {
                text: 'Matrix',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Matrix.js'
            },
            {
                text: 'DOMI',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/DOMI.js'
            },
            {
                text: 'MineCraft Overlay',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/MineCraftOverlay.js'
            },
            {
                text: 'Star Wars Intro',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Star-Wars-Intro.js'
            },
            {
                text: 'Old School',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Old-School.js'
            },
            {
                text: 'Earthquake',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/earthquake.js'
            },
            {
                text: 'Glitch Images',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/glitch_image.js'
            },
            {
                text: 'Snow',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/snow.js'
            },
            {
                text: '3D Webpage',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/3Dpage.js'
            }
        ],
        'Settings': []
    };

    const content = document.createElement('div');
    content.style.marginLeft = '140px';
    content.style.padding = '20px';
    content.style.height = 'calc(100% - 60px)';
    content.style.overflowY = 'auto';
    content.style.display = 'block';


    function displayButtons(groupName) {
        content.innerHTML = '';
        const buttonsToDisplay = buttonGroups[groupName];
        buttonsToDisplay.forEach((item) => {
            const button = createButtonElement(item.text, item.url);
            content.appendChild(button);
        });
    }

    function createSidebarButton(groupName) {
        const button = document.createElement('button');
        button.innerText = groupName;
        button.style.display = 'block';
        button.style.width = '120px';
        button.style.margin = '10px auto';
        button.style.padding = '10px';
        button.style.border = '1px solid #ccc';
        button.style.borderRadius = '12px';
        button.style.background = '#ffffff';
        button.style.color = '#000';
        button.style.cursor = 'pointer';
        button.style.transition = 'transform 0.2s ease-in-out';

        if (groupName === 'Settings') {
            button.innerHTML = `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXtJREFUSEu1letRxDAMhPc6gUqASoBKgEqASoBKoBPgy3gzi+JzzMDpjyeJrX1IVg46cRxOnF+zAJeS7iSxEq+SHto65DgL8C7prGQC5GrPgRkAEgNAeP9nez6X9DEC6QHYDhgS920lEQmJVPQUAG/fSvN5U4MbSY8dRtXzWpM8cpsgVYGlw8Kej4oJEIQggELUslKbxboEMPu0wswAo4vYw3crqv7bulVFD8C+P7dkWeS04gfTpgQCBAqWGlaLzJKk7hAs4CAHYEbwDnvcqkkCm7B1iV4XWaa/+Xll1erD+7ST+m3sHQFYQQ8A9i9B0gp2AbDIfW8AEtkOpJPEFtFt2DZlUW7yQUj+psgQYf+wi3ozhkPXrdiAZsGzs4ZtmiMAmzw5Zy6a74YvmkdKt01dg2Rmxr5YKHId6mQZjgo20/MXccq+Zlt7pPhSsrJvo3ZmXNeWJNmfxnWVnLWpo2L1unfo2E3u7fXU9IT991/mMYK772dqsJtktOEL4YBvGcKicUQAAAAASUVORK5CYII=" alt="Settings Icon" style="width: 20px; margin-right: 8px; vertical-align: middle;"> Settings`;
            setTimeout(() => {
                const icon = button.querySelector('img');
                if (icon) icon.style.transition = 'transform 0.2s ease';
            }, 0);
        }

        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.1)';
            if (groupName === 'Settings') {
                const icon = button.querySelector('img');
                if (icon) icon.style.transform = 'rotate(90deg) scale(1.1)';
            }
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
            if (groupName === 'Settings') {
                const icon = button.querySelector('img');
                if (icon) icon.style.transform = 'rotate(0deg) scale(1)';
            }
        });

        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.9)';
        });

        button.addEventListener('mouseup', () => {
            button.style.transform = 'scale(1)';
        });

        button.addEventListener('click', () => {
            if (groupName === 'Settings') {
                Swal.fire({
                    title: "Settings Menu Not Finished",
                    text: "I have not finished making the settings menu join the discord server to find out when I release it.",
                    icon: "error"
                });
            } else {
                displayButtons(groupName);
            }
        });

        return button;
    }

    function injectScriptToPage(code) {
    const s = document.createElement('script');
    s.textContent = code;
    document.body.appendChild(s);
    s.remove();
}

function executeScript(url) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: 'GET',
            url,
            onload: (res) => {
                try {
                    // Inject directly into page context so hacks work
                    injectScriptToPage(res.responseText);
                    resolve();
                } catch (e) {
                    reject(e);
                }
            },
            onerror: reject
        });
    });
}


    function createButtonElement(btnText, url) {
        const button = document.createElement('button');
        button.innerText = btnText;
        button.style.display = 'block';
        button.style.width = '120px';
        button.style.margin = '10px auto';
        button.style.padding = '10px';
        button.style.border = '1px solid #ccc';
        button.style.borderRadius = '12px';
        button.style.background = '#ffffff';
        button.style.color = '#000';
        button.style.cursor = 'pointer';
        button.style.transition = 'transform 0.2s ease-in-out';

        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.1)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.9)';
        });

        button.addEventListener('mouseup', () => {
            button.style.transform = 'scale(1)';
        });

        button.addEventListener('click', () => {
            showToast('Loading...', 'warning');

            executeScript(url)
                .then(() => {
                    showToast('Script loaded successfully', 'success');
                })
                .catch(() => {
                    showToast('Failed to load script. Check console for details.', 'error');
                    console.log(`Failed to load script: ${error.message}`)
                });
        })

        const showToast = (message, icon) => {
            const swalInstance = Swal.fire({
                toast: true,
                position: 'bottom',
                icon: icon,
                title: message,
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                willClose: () => Swal.stopTimer()
            });
        };

        return button;
    }

    sidebarButtons.forEach((btnText) => {
        const button = createSidebarButton(btnText);
        sidebar.appendChild(button);
    });

    menu.appendChild(content);
    document.body.appendChild(menu);

    displayButtons('All');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        content.innerHTML = '';
        const allButtons = buttonGroups['All'];
        const filteredButtons = allButtons.filter(({
                text
            }) =>
            text.toLowerCase().includes(query)
        );
        filteredButtons.forEach((item) => {
            const button = createButtonElement(item.text, item.url);
            content.appendChild(button);
        });
    });

    let isDragging = false;
    let offsetX = 0,
        offsetY = 0;

    header.addEventListener('mousedown', (e) => {
        if (
            e.target === searchInput ||
            e.target === maximizeButton ||
            e.target === minimizeButton ||
            e.target === closeButton
        ) {
            return;
        }
        isDragging = true;
        offsetX = e.clientX - menu.offsetLeft;
        offsetY = e.clientY - menu.offsetTop;
        header.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            menu.style.left = e.clientX - offsetX + 'px';
            menu.style.top = e.clientY - offsetY + 'px';
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        header.style.cursor = 'grab';
    });

    header.addEventListener('touchstart', (e) => {
        if (
            e.target === searchInput ||
            e.target === maximizeButton ||
            e.target === minimizeButton ||
            e.target === closeButton
        ) {
            return;
        }
        isDragging = true;
        const touch = e.touches[0];
        offsetX = touch.clientX - menu.offsetLeft;
        offsetY = touch.clientY - menu.offsetTop;
        e.preventDefault();
    });

    document.addEventListener('touchmove', (e) => {
        if (isDragging) {
            const touch = e.touches[0];
            menu.style.left = touch.clientX - offsetX + 'px';
            menu.style.top = touch.clientY - offsetY + 'px';
            e.preventDefault();
        }
    });

    document.addEventListener('touchend', () => {
        isDragging = false;
    });

    document.addEventListener('touchcancel', () => {
        isDragging = false;
    });

    closeButton.addEventListener('click', () => {
        menu.style.transition = 'opacity 0.2s ease-out';
        menu.style.opacity = '0';

        menu.addEventListener('transitionend', () => {
            menu.remove();
        }, {
            once: true
        });
    });

    maximizeButton.addEventListener('click', () => {
        // Started Develoupment For Fullscreen
        //if (document.fullscreenElement) {
        //document.exitFullscreen();
        //sidebar.style.width = '140px';
        //} else {
        //menu.requestFullscreen();
        //sidebar.style.width = '540px';
        //}

        Swal.fire({
            title: "Fullscreen Not Finished",
            text: "Started Develoupment For Fullscreen",
            icon: "error"
        });
    });

    let isMinimized = false;
    minimizeButton.addEventListener('click', () => {
        if (isMinimized) {
            menu.style.height = '350px';
            content.style.display = 'block';
        } else {
            menu.style.height = '42.3px';
            content.style.display = 'none';
        }
        isMinimized = !isMinimized;
    });
}
unsafeWindow.ExecutorUserScriptVersion = launchExecutor;
