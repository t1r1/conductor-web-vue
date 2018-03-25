<template>
  <div class="Pagination">
    <ul class="pagination">
        <li class="page-item disabled"><a class="page-link" href="#">&larr;</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item active"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">&rarr;</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Pagination'
}
</script>

<style>

.Pagination {
    margin: 30px auto 0;
    display: flex;
    justify-content: space-around;
}

.page-link, .page-item.disabled .page-link {
    background: white;
    border: 1px solid #ddd;
    color: black;
}

.page-item.disabled .page-link {
    color: #999;
}

.page-link:hover {
    background: #999;
}

.page-item:not(:first-child) .page-link {
    border-left: none;
}

.page-item.active .page-link {
    background: #18BC9C;
    color: white;
}

</style>
