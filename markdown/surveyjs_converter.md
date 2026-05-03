# Convert PDF Form to Blob, Base64 URL, or Raw PDF

Besides being able to download fillable survey forms as document files in a traditional PDF format, you can get them in other formats as well. These formats are mainly used to display PDF content in HTML inline, transfer PDF forms over the web, or store them in a database. This example shows how to get raw PDF content or convert it to Blob or a Base64-encoded data URL.

## Get Raw PDF Content

You can get a string value that includes document metadata and content according to the PDF specification. To do this, call the raw(type) method without arguments:

```javascript
surveyPDF.raw().then((rawcontent) => {
  // ...
});
```

## Convert PDF to Blob

A Blob (or Binary Large Object) is an array of binary data. The Blob format is designed primarily to store images, video, and other multimedia content. To export a PDF document as a Blob or Blob URL, pass "blob" or "bloburl" to the raw(type) method of a SurveyPDF instance:

```javascript
surveyPDF.raw('blob').then((blob) => {
  // ...
});
surveyPDF.raw('bloburl').then((bloburl) => {
  // ...
});
```

## Convert PDF to Base64 Data URL

A Base64 Data URL is a string that contains Base64-encoded binary data preceded by the word data, an MIME type that indicates the data type, and an optional base64 prefix for non-textual data. Data URLs are mostly used to insert media content into HTML inline. Refer to the following MDN article for more information: Data URLs.

To get a survey PDF file as a data URL, pass "dataurlstring" to the raw(type) method:

```javascript
surveyPDF.raw('dataurlstring').then((dataurlstring) => {
  // ...
});
```
